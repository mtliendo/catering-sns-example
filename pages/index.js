import { useState } from 'react'
import styles from '../styles/Home.module.css'
// import {API} from 'aws-amplify'
// import {withAuthenticator} from '@aws-amplify/ui-react'

const Home = () => {
	const [orders] = useState([
		{
			id: '123-abc',
			products: [
				{
					item: 'Chicken Tikka Masala',
					quantity: 2,
				},
			],
			customerNotes:
				'Mine is still better. https://github.com/dabit3/chicken-tikka-masala-recipe',
			status: 'AWAITING_PICKUP',
		},
		{
			id: '456-def',
			products: [
				{
					item: 'Yakamein',
					quantity: 1,
				},
			],
			customerNotes:
				"Yours is good, but still doesn't hit like mine! https://twitter.com/techgirl1908/status/1448098096387350534?s=20",
			status: 'AWAITING_PICKUP',
		},
	])

	// const handleOrderClick = async (orderID) => {
	// const details = await API.put('deliveryAPI', '/status', {
	// 		body: { orderID },
	// 	})
	// console.log(details)
	// }
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Current Catering Orders</h1>

			<div className={styles.grid}>
				{orders.map((order) => (
					<article className={styles.card} key={order.id}>
						<div className={styles.splitContent}>
							<h2>{order.id}</h2>
							<h2>{order.status}</h2>
						</div>
						<hr />
						<h3>Items</h3>
						<ul>
							{order.products.map((product) => (
								<li
									className={styles.splitContent}
									// onClick={() => handleOrderClick(product.id)}
								>
									<p>
										<span>Item:</span> {product.item}
									</p>{' '}
									<p>Quantity: {product.quantity}</p>
								</li>
							))}
						</ul>
						<hr />
						<h3>Notes From Customer</h3>
						<p>{order.customerNotes}</p>
					</article>
				))}
			</div>
		</div>
	)
}

export default Home
// export default withAuthenticator(Home)
