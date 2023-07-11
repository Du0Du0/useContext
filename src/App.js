import Content from './Content';
import Header from './Header';
import { LoginContext } from './context/LoginContext';
import { useState } from 'react';

function App() {
	const [Login, setLogin] = useState(false);
	return (
		//순서2 - 전역으로 생성한 빈 저장 객체에 원하는 값을 저장 (이때 값을 State로 저장)
		//null로 빈값이 저장되어 있는 LoginContext에 Provider로 원하는 값dmf value로 지정해서 전달
		//해당 LoginContext가 전체 컴포넌트들을 감싸고 있기 때문에 모든 자식 컴포넌트들은 추후 useState를 이용해서 해당 값에 자유롭게 접근 가능
		<LoginContext.Provider value={{ Login, setLogin }}>
			<main>
				<Header />
				<Content />
			</main>
		</LoginContext.Provider>
	);
}

export default App;
