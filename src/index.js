import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';

const items = [
				{	color : 'Merah',
					img  :'merah2.jpg',
					title:'Ma-Merah',
				},
				{	color : 'Kuning',
					img  :'kuning1.jpg',
					title:'Ma-Kuning',
				},
				{	color : 'Hijau',
					img  :'hijau1.jpg',
					title:'Ma-Hijau',
				},
				{	color : 'Biru',
					img  :'biru.jpg',
					title:'Ma-Biru',
				},
				];

ReactDOM.render(<App items={items} />, document.getElementById('root'));

