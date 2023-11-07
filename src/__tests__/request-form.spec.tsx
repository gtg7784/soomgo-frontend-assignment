import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../lib/test';
import * as remotes from '../remotes';
import store from '../store';

describe('Index Page', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('renders the page', async () => {
    jest.spyOn(remotes, 'getForm').mockResolvedValue(mockApiResponse);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    jest.spyOn(store, 'dispatch').mockImplementation(() => {});

    renderWithRouter({
      route: '/request-form?id=1',
    });

    const Title = await waitFor(() =>
      screen.findByText('사무실 대청소 요청서 폼'),
    );

    expect(Title).toBeInTheDocument();

    const QuestionName = await waitFor(() =>
      screen.findByText('원하는 청소 스타일은 무엇인가요?'),
    );
    const Answer1 = await waitFor(() => screen.findByText('스팀청소'));

    expect(QuestionName).toBeInTheDocument();
    expect(Answer1).toBeInTheDocument();

    const NextButton1 = await waitFor(() => screen.findByText('다음'));

    await userEvent.click(NextButton1);

    expect(window.alert).toBeCalledWith('값을 입력해주세요!');

    await userEvent.click(Answer1);
    await userEvent.click(NextButton1);

    const QuestionName2 = await waitFor(() =>
      screen.findByText('추가로 원하는 서비스를 선택해주세요.'),
    );

    expect(QuestionName2).toBeInTheDocument();

    const Answer2_1 = await waitFor(() => screen.findByText('화장실 청소'));
    const Answer2_2 = await waitFor(() => screen.findByText('계단 청소'));
    const NextButton2 = await waitFor(() => screen.findByText('다음'));

    await userEvent.click(Answer2_1);
    await userEvent.click(Answer2_2);
    await userEvent.click(NextButton2);

    const QuestionName3 = await waitFor(() =>
      screen.findByText('첫 번째 셀렉트박스 질문입니다.'),
    );

    expect(QuestionName3).toBeInTheDocument();

    const Answer3 = screen.getByRole('combobox', {
      name: '첫 번째 셀렉트박스 질문입니다.',
    });
    const NextButton3 = await waitFor(() => screen.findByText('다음'));

    await userEvent.selectOptions(Answer3, '첫 번째 답변입니다');
    await userEvent.click(NextButton3);

    const QuestionName4 = await waitFor(() =>
      screen.findByText('두 번째 셀렉트박스 질문입니다.'),
    );

    expect(QuestionName4).toBeInTheDocument();

    const Answer4 = screen.getByRole('combobox', {
      name: '두 번째 셀렉트박스 질문입니다.',
    });
    const NextButton4 = await waitFor(() => screen.findByText('제출'));

    await userEvent.selectOptions(Answer4, '네 번째 답변입니다');
    await userEvent.click(NextButton4);

    expect(store.dispatch).toBeCalledWith({
      payload: {
        id: 1,
        items: [
          {
            id: 1005,
            answer: '스팀청소',
          },
          {
            id: 1006,
            answer: '화장실 청소,계단 청소',
          },
          {
            id: 1007,
            answer: '첫 번째 답변입니다',
          },
          {
            id: 1008,
            answer: '네 번째 답변입니다',
          },
        ],
      },
      type: 'Output/setOutput',
    });
  });
});

const mockApiResponse = {
  formId: 1,
  title: '사무실 대청소 요청서 폼',
  items: [
    {
      itemId: 1005,
      title: '원하는 청소 스타일은 무엇인가요?',
      formType: 'checkbox',
      options: [
        {
          id: 4001,
          text: '스팀청소',
        },
        {
          id: 4002,
          text: '진공청소기로 청소',
        },
        {
          id: 4003,
          text: '쓰레기 비우기',
        },
      ],
    },
    {
      itemId: 1006,
      title: '추가로 원하는 서비스를 선택해주세요.',
      formType: 'checkbox',
      options: [
        {
          id: 4004,
          text: '화장실 청소',
        },
        {
          id: 4005,
          text: '계단 청소',
        },
        {
          id: 4006,
          text: '바닥 코팅',
        },
      ],
    },
    {
      itemId: 1007,
      title: '첫 번째 셀렉트박스 질문입니다.',
      formType: 'select',
      options: [
        {
          id: 5001,
          text: '첫 번째 답변입니다',
        },
        {
          id: 5002,
          text: '두 번째 답변입니다',
        },
        {
          id: 5003,
          text: '세 번째 답변입니다',
        },
      ],
    },
    {
      itemId: 1008,
      title: '두 번째 셀렉트박스 질문입니다.',
      formType: 'select',
      options: [
        {
          id: 5007,
          text: '첫 번째 답변입니다',
        },
        {
          id: 5008,
          text: '두 번째 답변입니다',
        },
        {
          id: 5009,
          text: '세 번째 답변입니다',
        },
        {
          id: 5010,
          text: '네 번째 답변입니다',
        },
      ],
    },
  ],
};
