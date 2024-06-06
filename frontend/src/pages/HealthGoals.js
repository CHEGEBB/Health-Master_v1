import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Chart2 from 'react-apexcharts';
import './HealthGoals.scss';
import strong from '../images/icons/docs/icon-park-twotone--muscle.svg';
import run from '../images/icons/docs/ic--sharp-directions-run.svg';
import sleep from '../images/icons/docs/mdi--sleep-schedule.svg';
import cycle from '../images/icons/docs/bx--cycling.svg';
import verticalDotsIcon from '../images/icons/docs/cil--options.svg'; 
import papayaImage from '../images/papaya.webp';
import spinachImage from '../images/spinach.jfif';
import broccoliImage from '../images/brocolli.jfif';
import blueberryImage from '../images/blueberry.jfif';
import salmonImage from '../images/salmon.jfif';
import quinoaImage from '../images/quinoa.jfif';
import avocadoImage from '../images/avocado.jfif';
import greekyogurtImage from '../images/greekyyoghurt.jfif';
import { useDarkMode } from "../context/DarkModeContext"; 

const HealthGoals = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const [showOptions, setShowOptions] = useState(null);
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');
    const { isDarkMode } = useDarkMode();


    const toggleOptions = (index) => {
        setShowOptions(showOptions === index ? null : index);
    };

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            const ctx = chartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    datasets: [
                        {
                            label: 'Walking Progress',
                            data: [32, 26, 35, 49, 36, 43],
                            borderColor: '#ff1493',
                            fill: false,
                        },
                        {
                            label: 'Running Progress',
                            data: [24, 44, 47, 29, 23, 49],
                            borderColor: '#7b68ee',
                            fill: false,
                        },
                        {
                            label: 'Cycling Progress',
                            data: [23, 24, 35, 46, 30, 50],
                            borderColor: '#00fa9a',
                            fill: false,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            grid: {
                                display: false,
                                color: '#ddd',
                            },
                        },
                    },
                },
            });
        }
    }, []);

    const plans = [
        { day: 'Mon', title: 'Routine Cardio Burn Workout', status: 'UNFINISHED', type: 'Running', value: 5 },
        { day: 'Tue', title: 'Total Body Yoga Workout', status: 'IN PROGRESS', type: 'Yoga', value: 3 },
        { day: 'Sun', title: 'Routine Cardio Burn Workout', status: 'UNFINISHED', type: 'Cycling', value: 28 },
        { day: 'Fri', title: 'Weekly Routine Cycling', status: 'FINISHED', type: 'Cycling', value: 34},
        { day: 'Tue', title: '2020 Runner Event Workout', status: 'FINISHED', type: 'Running', value: 24 },
        { day: 'Sat', title: 'Daily Running Workout', status: 'FINISHED:20KM', type: 'Running', value: 20 }
    ];
    const radialChartData = {
        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: true,
                        },
                    },
                },
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            labels: ['Vitamin C', 'Iron', 'Fiber', 'Protein'],
            legend: {
                show: true,
                floating: true,
                fontSize: '12px',
                marginLeft:'50px',
                position: 'left',
                offsetX: 240,
                offsetY: 70,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 0,
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 1,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        },
    };
    const handleGoalSetting = (e) => {
        e.preventDefault();
        console.log('Setting goals...');
        console.log('Calories:', calories);
        console.log('Protein:', protein);
        console.log('Carbs:', carbs);
        console.log('Fats:', fats);
    };

    const backStyles ={
        backgroundColor: isDarkMode ? '#09101A' : '#f5f5f5',
        color: isDarkMode ? '#fff' : '#000'
      }

    const weeklyStyles={
        backgroundColor: isDarkMode ? '#1B1B2F' : '#f0f8ff',
        color: isDarkMode ? '#fff' : '#000'
    }
    const headings = {
        color: isDarkMode ? '#fff' : '#000'
      }
      const iconstyles={
        backgroundColor: isDarkMode ? '#ccc' : '#555',
        color: isDarkMode ? '#fff' : '#000'
      }
      
    return (
        <div className="health-goals">
            <div className="goals">
                <div className="progress">
                    <div className="progress-row1">
                        <div className="weekly-progress-workout" style={weeklyStyles}>
                            <div className="prog">
                                <div className="procon" style={iconstyles}>
                                    <img src={strong} alt="strong" />
                                </div>
                                <div className="det1">
                                    <h2 style={headings}>Workout Progress</h2>
                                    <p style={headings}>40%</p>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar-fill">
                                    <div className="progress-bar-fill">50%</div>
                                </div>
                            </div>
                        </div>
                        <div className="weekly-progress-run" style={weeklyStyles}>
                            <div className="prog">
                                <div className="procon" style={iconstyles}>
                                    <img src={run} alt="run" />
                                </div>
                                <div className="det1">
                                    <h2  style={headings}>Run Progress</h2>
                                    <p  style={headings}>25%</p>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar-fill">
                                    <div className="progress-bar-fill-text">25%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="progress-row2">
                        <div className="weekly-progress-sleep" style={weeklyStyles}>
                            <div className="prog">
                                <div className="procon" style={iconstyles}>
                                    <img src={sleep} alt="sleep" />
                                </div>
                                <div className="det1">
                                    <h2  style={headings}>Sleep Management</h2>
                                    <p  style={headings}>30%</p>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar-fill">
                                    <div className="progress-bar-fill-text">40%</div>
                                </div>
                            </div>
                        </div>
                        <div className="weekly-progress-cycling" style={weeklyStyles}>
                            <div className="prog">
                                <div className="procon" style={iconstyles}>
                                    <img src={cycle} alt="cycle" />
                                </div>
                                <div className="det1">
                                    <h2  style={headings}>Cycling Progress</h2>
                                    <p  style={headings}>40%</p>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar-fill">
                                    <div className="progress-bar-fill-text">20%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="practice" style={weeklyStyles}>
                    <h2>Exercise Progress</h2>
                    <p>Here is your weekly exercise progress. Keep it up!</p>
                    <div className="exercise-visual" style={weeklyStyles}>
                        <canvas ref={chartRef} width={700} height={400} />
                    </div>
                </div>
                <div className="plan-list" style={backStyles}>
                    <h2>Plan List</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <nav>
                        <ul>
                            <li>All</li>
                            <li>Unfinished</li>
                            <li>Finished</li>
                            <li>4</li>
                        </ul>
                    </nav>
                    {plans.map((plan, index) => (
                        <div key={index} className="plan-item" style={weeklyStyles}>
                            <div className="day" style={weeklyStyles}>{plan.day}</div>
                            <div className="plan-details">
                                <div className="plan-title">{plan.title}</div>
                                <div className="plan-status">{plan.status}</div>
                                <div className="plan-type">{plan.type}</div>
                                <div className="plan-value">{plan.value}</div>
                                <div className="plan-actions">
                                    <button className="start-workout">Start Workout</button>
                                    <div className="options" onClick={() => toggleOptions(index)}>
                                        <img src={verticalDotsIcon} alt="Options" />
                                        {showOptions === index && (
                                            <div className="dropdown-menu">
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="nutritional-goals">
                <div className="food-vis" style={weeklyStyles}>
                <div className="goal-setting">
                <h2>Nutritional Goals</h2>
                <form onSubmit={handleGoalSetting}>
                    <div className="form-group">
                        <label htmlFor="calories">Calories:</label>
                        <input
                            type="number"
                            id="calories"
                            name="calories"
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
                            placeholder="Enter daily calorie goal"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="protein">Protein (g):</label>
                        <input
                            type="number"
                            id="protein"
                            name="protein"
                            value={protein}
                            onChange={(e) => setProtein(e.target.value)}
                            placeholder="Enter daily protein goal"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carbs">Carbohydrates (g):</label>
                        <input
                            type="number"
                            id="carbs"
                            name="carbs"
                            value={carbs}
                            onChange={(e) => setCarbs(e.target.value)}
                            placeholder="Enter daily carbohydrate goal"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fats">Fats (g):</label>
                        <input
                            type="number"
                            id="fats"
                            name="fats"
                            value={fats}
                            onChange={(e) => setFats(e.target.value)}
                            placeholder="Enter daily fat goal"
                        />
                    </div>
                    <button type="submit">Set Goals</button>
                </form>
            </div>
            <div className="radial-chart">
                <h2>Radial Chart</h2>
                <Chart2
                    options={radialChartData.options}
                    series={radialChartData.series}
                    type="radialBar"
                    height={350}
                />
            </div>
            </div>
            <div className="foods">
    <div className="food-item" style={weeklyStyles}>
        <div className="food-image">
            <img src={papayaImage} alt="Papaya Fruit" />
        </div>
        <div className="food-info">
            <h2>Papaya Fruit for Vitamin C</h2>
            <p>
                Papaya is rich in vitamin C, which boosts immunity and aids digestion. It also contains papain, an enzyme that helps break down proteins.
            </p>
            <div className="expert-info">
                <p> Dr Andrew Sceenshaver</p>
            </div>
        </div>
        <div className="buttons">
        <button>View</button>
            <button>Delete</button>
        </div>
    </div>

    <div className="food-item" style={weeklyStyles}>
        <div className="food-image">
            <img src={spinachImage} alt="Spinach" />
        </div>
        <div className="food-info">
            <h2>Spinach for Iron</h2>
            <p>
                Spinach is packed with iron, essential for healthy red blood cells. It also contains vitamins A and K, folate, and antioxidants.
            </p>
            <div className="expert-info">
                <p>Dr Sarah Smith</p>
            </div>
        </div>
        <div className="buttons">
        <button>View</button>
            <button>Delete</button>
        </div>
    </div>
    <div className="food-item" style={weeklyStyles}>
                <div className="food-image">
                    <img src={broccoliImage} alt="Broccoli" />
                </div>
                <div className="food-info">
                    <h2>Broccoli for Fiber and Vitamin K</h2>
                    <p>
                        Broccoli is high in fiber, vitamin K, and antioxidants. It supports digestion, bone health, and may reduce the risk of chronic diseases.
                    </p>
                    <div className="expert-info">
                        <p>Nutritionist John Williams</p>
                    </div>
                </div>
                <div className="buttons">
                <button>View</button>
            <button>Delete</button>
        </div>
            </div>

            {/* Food item 4 */}
            <div className="food-item" style={weeklyStyles}>
                <div className="food-image">
                    <img src={blueberryImage} alt="Blueberries" />
                </div>
                <div className="food-info">
                    <h2>Blueberries for Antioxidants</h2>
                    <p>
                        Blueberries are rich in antioxidants, which help protect cells from damage and reduce inflammation. They also support brain health and may improve memory.
                    </p>
                    <div className="expert-info">
                        <p>Nutritionist Jane Smith</p>
                    </div>
                </div>
                <div className="buttons">
                <button>View</button>
            <button>Delete</button>
        </div>
            </div>

            {/* Food item 5 */}
            <div className="food-item" style={weeklyStyles}>
                <div className="food-image">
                    <img src={salmonImage} alt="Salmon" />
                </div>
                <div className="food-info">
                    <h2>Salmon for Omega-3 Fatty Acids</h2>
                    <p>
                        Salmon is a rich source of omega-3 fatty acids, which are beneficial for heart health, brain function, and reducing inflammation. It also provides high-quality protein and essential nutrients.
                    </p>
                    <div className="expert-info">
                        <p>Dr Michael Johnson</p>
                    </div>
                </div>
                <div className="buttons">
                <button>View</button>
            <button>Delete</button>
        </div>
            </div>

            {/* Food item 6 */}
            <div className="food-item" style={weeklyStyles}>
                <div className="food-image">
                    <img src={quinoaImage} alt="Quinoa" />
                </div>
                <div className="food-info">
                    <h2>Quinoa for Protein and Fiber</h2>
                    <p>
                        Quinoa is a complete protein source and high in fiber, making it a nutritious grain alternative. It also contains vitamins, minerals, and antioxidants.
                    </p>
                    <div className="expert-info">
                        <p>Nutritionist Amy Smith</p>
                    </div>
                </div>
                <div className="buttons">
                <button>View</button>
            <button>Delete</button>
        </div>
            </div>

            {/* Food item 7 */}
            <div className="food-item" style={weeklyStyles}>
                <div className="food-image">
                    <img src={avocadoImage} alt="Avocado" />
                </div>
                <div className="food-info">
                    <h2>Avocado for Healthy Fats</h2>
                    <p>
                        Avocado is rich in healthy fats, including monounsaturated fats and omega-3 fatty acids. It also provides fiber, vitamins, and minerals, promoting heart health and satiety.
                    </p>
                    <div className="expert-info">
                        <p>Food expert Emily Johnson</p>
                    </div>
                </div>
                <div className="buttons">
                <button>View</button>
            <button>Delete</button>
        </div>
            </div>

            {/* Food item 8 */}
            <div className="food-item" style={weeklyStyles}>
                <div className="food-image">
                    <img src={greekyogurtImage} alt="Greek Yogurt" />
                </div>
                <div className="food-info">
                    <h2>Greek Yogurt for Probiotics and Protein</h2>
                    <p>
                        Greek yogurt is a good source of probiotics, which support gut health and immunity. It also provides high-quality protein, calcium, and vitamins.
                    </p>
                    <div className="expert-info">
                        <p>Food Expert David Brown</p>
                    </div>
                </div>
                <div className="buttons">
                <button>View</button>

            <button>Delete</button>
        </div>
            </div>
           
            </div>
</div>

            </div>
         </div>
    );
};

export default HealthGoals;
