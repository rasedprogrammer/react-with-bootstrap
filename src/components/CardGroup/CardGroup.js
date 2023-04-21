import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
	const products = [
		{ id: 1, name: "TV", price: 30000 },
		{ id: 2, name: "LED", price: 50000 },
		{ id: 3, name: "Smart TV", price: 80000 },
	];
	return (
		<div>
			<div className="card-group">
				{products.map((product) => (
					<Card key={product.id} product={product}></Card>
				))}
			</div>
		</div>
	);
};

export default CardGroup;
