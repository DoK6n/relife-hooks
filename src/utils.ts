/**
 * @en
 * Function to check if the dependency array is not empty
 *
 * @ko
 * 의존성 배열이 비어 있지 않은지 확인하는 함수
 */
export const hasDeps = (deps: React.DependencyList): boolean => deps.length > 0

/**
 * @en
 * Object containing environment checks for production, development, test, and mode. It also checks if the code is running in a server-side rendering environment.
 *
 * @ko
 * 프로덕션, 개발, 테스트 환경 및 모드를 확인하는 객체입니다. 서버 사이드 렌더링 환경에서 코드가 실행되고 있는지도 확인합니다.
 */
export const env = {
  PROD: process.env.NODE_ENV === 'production',
  DEV: process.env.NODE_ENV === 'development',
  TEST: process.env.NODE_ENV === 'test',
  MODE: process.env.NODE_ENV,
  SSR: typeof window !== 'undefined',
}
