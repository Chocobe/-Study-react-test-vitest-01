import { screen } from '@testing-library/react';
import React from 'react';

import NotFoundPage from '@/pages/error/components/NotFoundPage';
import render from '@/utils/test/render';

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');

  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

it('"Home으로 이동" 버튼 클릭 시, "/"경로로 이동하는 navigate 함수가 호출된다.', async () => {
  const { user } = await render(<NotFoundPage />);

  const $button = screen.getByRole('button', {
    name: 'Home으로 이동',
  });

  await user.click($button);

  expect(navigateFn).toHaveBeenNthCalledWith(1, '/', {
    replace: true,
  });
});
