import React from 'react';
import s from './Nav.module.scss';
import nextId from "react-id-generator";
import IconCoffee from "./icon/IconCoffee";
import {Link} from "react-router-dom";

const Nav = ({modif=''}) => {
	
	const dataList = [
		{label: 'Coffee house', link: ''},
		{label: 'Our coffee', link: 'ourcoffee'},
		{label: 'For your pleasure', link: 'pleasure'},
	];
	
	const list = dataList.map((item) => {
		return (
			<li className={s.item} key={nextId()}>
				<Link to={`/${item.link}`} className={s.link}>{item.label}</Link>
			</li>
		)
	})
	
	return (
		<nav className={`${s.nav} ${s[modif]}`}>
			<span className={s.icon}>
				<IconCoffee/>
			</span>
			<ul className={s.list}>
				{list}
			</ul>
		</nav>
	);
}

export default Nav