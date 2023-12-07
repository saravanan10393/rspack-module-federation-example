import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Button } from "remote1/button";
import { Card } from "remote2/card";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React</h1>
			
			<Card className="card">
				<Button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</Button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</Card>
			<p className="read-the-docs">
				Click on the Rspack and React logos to learn more
			</p>
		</div>
	);
}

export default App;
