import React from 'react';
import s from './MainSection.module.scss';
import LineCoffee from "../LineCoffee/LineCoffee";
import Nav from "../Nav/Nav";
import LinkButton from "../UI/LinkButton/LinkButton";

const MainSection = () => {
	return (
		<section className={s.bg}>
			<div className="wrap">
				<div className={s.main}>
					<Nav/>
					<h1 className={s.title}>Everything You Love About Coffee</h1>
					<LineCoffee/>
					<div className={s.desc}>
						<p>We makes every day full of energy and taste</p>
						<p>Want to try our beans?</p>
					</div>
					<LinkButton href={'#'} traget={'_blank'}>More</LinkButton>
				</div>


			</div>
		</section>
	);
}

export default MainSection