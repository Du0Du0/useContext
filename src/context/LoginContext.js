//순서1 - 전역으로 관리할 저장객체 사용
//createContext를 이용해서 초기값을 null로 지정한 빈 객체를 생성
//해당 LoginContext가 전체 컴포넌트들을 감싸고 있기 때문에 모든 자식 컴포넌트들은 추후 useContext를 이용해서 해당 값에 자유롭게 접근 가능
import { createContext } from 'react';
export const LoginContext = createContext(null);
