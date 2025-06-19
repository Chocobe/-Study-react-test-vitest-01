import { debounce, pick } from './common';

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

describe('debounce() 유틸 함수 테스트', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('특정 시간이 지난 후, 함수가 호출된다.', () => {
    const spy = vi.fn();

    const debouncedFn = debounce(spy, 300);
    debouncedFn();

    vi.advanceTimersByTime(300);

    expect(spy).toHaveBeenCalled();
  });

  it('지정한 시간 이후에 호출한 경우에만 함수가 호출된다.', () => {
    const spy = vi.fn();

    const debouncedFn = debounce(spy, 300);

    debouncedFn();
    vi.advanceTimersByTime(100);

    debouncedFn();
    vi.advanceTimersByTime(200);

    debouncedFn();
    vi.advanceTimersByTime(100);

    debouncedFn();
    vi.advanceTimersByTime(200);

    debouncedFn();
    vi.advanceTimersByTime(300);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
