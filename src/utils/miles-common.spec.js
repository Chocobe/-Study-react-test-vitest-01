import { pick } from './common';

describe('pick() 유틸 함수 테스트', () => {
  it('단위 인자로 전달한 키와 값을 객체에 담아 반환한다.', () => {
    const obj = {
      a: 'A',
      b: 2,
      c: true,
    };

    const result = pick(obj, 'a');

    expect(result).toEqual({ a: 'A' });
  });

  it('2개 이상의 인자로 전달된 키와 값을 객체로 담아서 반환한다.', () => {
    const obj = {
      a: 'A',
      b: 2,
      c: true,
    };

    const result = pick(obj, 'a', 'b');

    expect(result).toEqual({ a: 'A', b: 2 });
  });

  it('대상 객체로 아무것도 전달하지 않을 경우, 빈 객체가 반환된다.', () => {
    const obj = {
      a: 'A',
      b: 2,
      c: true,
    };

    const result = pick(obj);

    expect(result).toEqual({});
  });

  it('대상 객체로 아무것도 전달하지 않을 경우, 빈 객체가 반홚된다.', () => {
    const result = pick();

    expect(result).toEqual({});
  });

  it('propNames를 지정하지 않을 경우 빈 객체가 반환된다.', () => {
    const result = pick();

    expect(result).toEqual({});
  });
});
