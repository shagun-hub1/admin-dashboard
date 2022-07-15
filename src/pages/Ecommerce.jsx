import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore, IoMdGitMerge } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine, Footer } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/contextProvider';
import product9 from '../data/product9.jpg';

const Ecommerce = () => {

  const {currentColor}=useStateContext()

  return (
    <div className='mt-12'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-bold text-gray-400'>Earnings</p>
                <p className='text-2xl'>$63,448.78</p>
              </div>
            </div>
            <div className='mt-6'>
              <Button
              color='white'
              bgColor={currentColor}
              text='Download'
              size='md'
              borderRadius="10px"
              />
            </div>
            </div>

            <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                {earningData.map((item)=>(
                  <div 
                  key={item.title}
                  className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl'
                  >
                    <button 
                    type='button'
                    style={{color:item.iconColor , backgroundColor:item.iconBg}}
                    className='rounded-full p-4 text-2xl  hover:drop-shadow-xl'
                    >
                      {item.icon}
                    </button>
                    <p className='mt-3'>
                      <span className='text-xl font-semibold'>{item.amount}</span>
                      <span className={`text-sm ml-2 text-${item.pcColor}`}>{item.percentage}</span>
                    </p>
                    <p className='text-sm text-gray-400 mt-4'>
                      {item.title}
                    </p>
                  </div>
                ))}
            </div>
        </div>

        <div className='flex flex-wrap gap-10 justify-center'>
              <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-[780px]'>
                  <div className='flex justify-between'>
                    <p className='font-semibold text-xl'>Revenue Updates</p>
                    <div className='flex items-center gap-4'>
                      <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                        <span><GoPrimitiveDot/></span>
                        <span>Expense</span>
                      </p>
                      <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                        <span><GoPrimitiveDot/></span>
                        <span>Budget</span>
                      </p>
                    </div>
                  </div>

                  <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                      <div className='border-r-1 border-color m-4 pr-10 '>
                        <div>
                          <p>
                            <span className='text-3xl font-semibold'>$93,438</span>
                            <span className='p-2 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                          </p>
                          <p className='text-gray-500 mt-1'>Budget</p>
                        </div>
                        <div className='mt-8'>
                          <p>
                            <span className='text-3xl font-semibold'>$43,438</span>    
                          </p>
                          <p className='text-gray-500 mt-1'>Expense</p>
                        </div>

                        <div className='mt-5'>
                          <SparkLine
                          currentColor={currentColor}
                          id='line-sparkLine'
                          type='Line'
                          height='80px'
                          width='250px'
                          data={SparklineAreaData}
                          color={currentColor}
                          />
                        </div>

                        <div className='mt-10'>
                          <Button
                          color='white'
                          bgColor={currentColor}
                          text='Download Report'
                          borderRadius='10px'
                          />
                        </div>

                      </div>

                      <div>
                        <Stacked
                        width='320px'
                        height='360px'
                        />
                      </div>

                  </div>



              </div>
        </div >

        <div className='flex justify-center items-center'>
                  <div className='p-4 rounded-xl text-white font-bold  text-2xl' style={{backgroundColor:currentColor}}>
                    <div className='mt-4 flex justify-between'>
                      <p>Earnings</p>
                      <div>
                        <p>$63,448.78</p>
                        <p className='text-gray-200 text-base'>Monthly Revenue</p>
                      </div>
                    </div>

                    <div className='mt-4'>
                        <SparkLine
                        currentColor={currentColor}
                        id='column-sparkline'
                        height='100px'
                        type='Column'
                        data={SparklineAreaData}
                        width='320'
                        color="rgb(242, 252, 253)"
                        />
                    </div>
                  </div>
        </div>
        <div className='flex justify-center items-center mt-10'>

        <div className='rounded-xl flex justify-between items-center bg-white dark:bg-secondary-dark-bg'>
                  <div className='text-xl'>
                    <p className='font-bold'>$43,246</p>
                    <p className='text-gray-400'>Yearly Sales</p>
                  </div>
                  
                  <div className="w-40">
                      <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
                  </div>                  
        </div>
        </div>

        <div className='flex justify-center items-center mt-10'>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
          </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Ecommerce