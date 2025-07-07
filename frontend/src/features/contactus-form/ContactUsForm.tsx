import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

export default function ContactUsForm() {
    const navigate = useNavigate();
  return (
     <div className="inputFields w-full flex flex-col gap-5 items-start">
                  
                    <CommonInput type='email' name='email' placeholder='Write your email' label='Email Address'
                        required={true}
                        error='Email is required'
                        icon={<MdOutlineEmail fill='gray' fontSize={13} />}
                    />
                       <div className="radioinputfield flex gap-6 flex-wrap">
                            {['Report', 'Suggest', 'Other'].map((topic, index) => (
                                <div className="single-input">

                                    <label key={topic} className="flex items-center gap-2 cursor-pointer p-3">
                                        <input
                                            type="radio"
                                            id={topic}
                                            name="Topic"
                                            value={topic}
                                            className="accent-teal-700 w-4 h-4"
                                        />
                                        <span className="text-gray-700 capitalize">{topic.replace('-', ' ')}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                 <CommonInput type='text' name='text' placeholder='Write Headline' label='Headline'
                        required={false}
                       
                       
                    />
                  
                 <div className="Bio w-full">
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here..."
                            rows={4}
                            className="w-full p-3  rounded-md focus:ring-teal-600"
                        ></textarea>
                    </div>   



                   
                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Submit"

                            variant="primary"
                            type='submit'
                            onClick={() => navigate('/more-info', { state: { step: 1 } })}

                        />
                    </div>
                    

                </div>
  )
}
