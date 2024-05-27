import React from 'react';
import Card from '../components/Card'

const CardList = ({robots}) => {
	// catch error boundry
	// if(true){
	// 	throw new Error('Noooooooooo');
	// }
	return(
			robots.map((user,i) => {
				return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
			})
		)
}

export default CardList;