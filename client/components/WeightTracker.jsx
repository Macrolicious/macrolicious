import React from 'react'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
)

function WeightTracker() {
	const data = {
		labels: [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		],
		datasets: [
			{
				label: 'Weight',
				data: [70, 69, 70, 71, 72, 71, 70],
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: '#F3F4F7',
				hoverOffset: 4,
				animations: {
					tension: {
						duration: 1000,
						easing: 'linear',
						from: 1,
						to: 0,
						loop: true,
					},
				},
			},
		],
	}

	return (
		<div>
			<h2>Daily Weight Tracker</h2>
			<div>
				<Line
					data={data}
					options={{
						maintainAspectRatio: false,
						scales: {
							x: { max: data.labels.length - 1 },
							y: {
								min: 65,
								max: 75,
							},
						},
						elements: {
							point: {
								pointStyle: '',
								radius: 20,
								rotation: 270,
								hoverRadius: 30,
							},
						},
					}}
					style={{ maxWidth: '800px', maxHeight: '600px' }}
				/>
			</div>
		</div>
	)
}

export default WeightTracker
