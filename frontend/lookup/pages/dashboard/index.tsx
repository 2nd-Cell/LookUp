import DefaultLayout from "@/layouts/default";
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function DashBoard() {

  const chartOptionsA = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          callback: function (value: number | string) {
            return `${value}h`;
          },
          font: {
            size: 12
          }
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          boxWidth: 0,
          font: {
            size: 12
          }
        }
      }
    }
  };

  const gaugeValue = [
    {
    fill: 75
    }
  ];

  const chartOptionsB = {
    responsive: true,
    maintainAspectRatio: false
  }

  const progressData = [
  { label: 'questions', value: 60, color: 'rgba(54, 162, 235, 0.5)' },  // blue-ish
  { label: 'forum', value: 80, color: 'rgba(75, 192, 192, 0.5)' },     // teal-ish
  { label: 'quiz', value: 50, color: 'rgba(153, 102, 255, 0.5)' },     // purple-ish
  { label: 'forms', value: 70, color: 'rgba(255, 99, 132, 0.5)' }      // red-ish
];

    const chartOptionsD = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const chartOptionsE = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    scales: {
      x: {
        grid: {
          display: false
        },
        display: false
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const chartOptionsF = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  
  return (
    <DefaultLayout>

        <div className="p-[2vw] gap-x-[1vw] grid grid-cols-4 grid-rows-3">

{/* -------------------------------------------------------------------------------------------------------------------------- */}

          <div className="bg-gray-100 rounded-lg border border-gray-300 px-2 col-span-3 h-[200px] mb-1">

            <div className="flex justify-center text-xl text-gray-500 my-[1vh] underline decoration-1 underline-offset-2">Activity</div>

            <div >
              <Line
                data={{
                  labels: ["1","2","3","4","5","6","7"],
                  datasets: [
                    {
                      label: "January",
                      data: [2,7,3,9,2,0,4],
                      backgroundColor: 'rgba(54, 162, 235, 0.5)',
                      borderColor: 'rgba(54, 162, 235, 0.5)',
                      tension: 0.3
                    }            
                  ]
                }}
                options={chartOptionsA}
              />
            </div>

          </div>

{/* -------------------------------------------------------------------------------------------------------------------------- */}

          <div className="bg-gray-100 rounded-lg border border-gray-300 px-2 col-span-1 h-[200px] mb-1">

            <div className="flex justify-center text-xl text-gray-500 my-[1vh] underline decoration-1 underline-offset-2">Score</div>

            {gaugeValue.map((v) => (
              <div className="absolute top-[28vh] right-[12vw] text-gray-500 text-xl">{Math.round((v.fill/(v.fill+(100-v.fill)))*100)}%</div>
            ))}

            {gaugeValue.map((v) => (
              <div>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [v.fill,100-v.fill],
                        backgroundColor: [
                          "rgba(46, 204, 113, 0.5)",
                          "white"
                        ],
                        borderColor: [
                          "rgba(46, 204, 113, 0.5)",
                          "white"
                        ]
                      }            
                    ]
                  }}
                  options={chartOptionsB}
                />
              </div>
            ))}

          </div>

{/* -------------------------------------------------------------------------------------------------------------------------- */}

          <div className="bg-gray-100 rounded-lg border border-gray-300 col-span-2 px-[1vw] h-[200px] my-1">

            <div className="flex justify-center text-xl text-gray-500 my-[1vh] underline decoration-1 underline-offset-2">Total verified</div>

            <div className="space-y-4">

              {progressData.map((item, index) => (

              <div key={index} className="flex items-center space-x-4">

                <div className="w-24 text-sm text-gray-600">
                  {item.label}
                </div>

                <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">

                  <div
                    className={`h-full rounded-full`}
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />

                </div>

              </div>
              ))}

            </div>

          </div>

{/* -------------------------------------------------------------------------------------------------------------------------- */}

          <div className="bg-gray-100 rounded-lg border border-gray-300 px-2 col-span-1 h-[200px] my-1">

            <div className="flex justify-center text-xl text-gray-500 my-[1vh] underline decoration-1 underline-offset-2">Posts verified by you</div>

            <div>
              <Bar
                data={{
                  labels: ["questions","forum","quiz","forms"],
                  datasets: [
                    {
                      data: [2,3,4,5],
                      backgroundColor: [
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)', 
                        'rgba(255, 99, 132, 0.5)'
                      ]
                    }            
                  ]
                }}
                options={chartOptionsD}
              />
            </div>

          </div>

{/* -------------------------------------------------------------------------------------------------------------------------- */}

          <div className="bg-gray-100 rounded-lg border border-gray-300 px-2 col-span-1 h-[200px] my-1">

            <div className="flex justify-center text-xl text-gray-500 my-[1vh] underline decoration-1 underline-offset-2">Your Verified Posts</div>

            <div>
              <Bar
                data={{
                  labels: ["questions","forum","quiz","forms"],
                  datasets: [
                    { 
                      data: [2,3,4,5],
                      backgroundColor: [
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)', 
                        'rgba(255, 99, 132, 0.5)'
                      ]
                    }            
                  ]
                }}
                options={chartOptionsE}
              />
            </div>

          </div>

{/* -------------------------------------------------------------------------------------------------------------------------- */}

          <div className="bg-gray-100 rounded-lg border border-gray-300 px-2 col-span-4 h-[200px] mt-1">

            <div className="flex justify-center text-xl text-gray-500 my-[1vh] underline decoration-1 underline-offset-2">Posted</div>

            <div>
              <Bar
                data={{
                  labels: ["January","February","March"],
                  datasets: [
                    {
                      label: "questions",
                      data: [2,3,4],
                      backgroundColor: 'rgba(54, 162, 235, 0.5)'
                    },
                    {
                      label: "forum",
                      data: [3,1,7],
                      backgroundColor: 'rgba(75, 192, 192, 0.5)'
                    },
                    {
                      label: "quiz",
                      data: [5,1,8],
                      backgroundColor: 'rgba(153, 102, 255, 0.5)'
                    },
                    {
                      label: "forms",
                      data: [6,1,2],
                      backgroundColor: 'rgba(255, 99, 132, 0.5)'
                    }                  
                  ]
                }}
                options={chartOptionsF}
                />
              </div>

          </div>

{/* -------------------------------------------------------------------------------------------------------------------------- */}
          
        </div>

    </DefaultLayout>
  );
}
