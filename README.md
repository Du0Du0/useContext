# useContent

-자식 컴포넌트의 뎁스가 많은 경우 최상위 컴포넌트에서 자식 컴포넌트까지 값을 일일이 전달 하는 것이 비효율적 -이처험 prop을 통해서 중간단계의 컴포넌트들이 계속 값을 전달하는 상황 (Pro Drilling) -이때 Contnent API을 활용한 useContext hook 을 활용하면 컴포넌트 외부에 전역으로 특정 값을 관리하며 자식 컴포넌트에서 바로 값 전달 가능
-createContext : context생성 후 Provider를 통해 전역으로 특정 값을 전달 가능
-useContext : useContext 로 생성된 값을 원하는 자식 컴포넌트에서 자유롭게 사용 가능
