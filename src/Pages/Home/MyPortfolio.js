import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mt-12'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-64' src="https://i.ibb.co/k8P415G/IMG-20211115-WA0007-1.jpg" alt='' />
                    <div className='text-left ml-14'>
                        <h1 class="text-5xl font-bold"></h1>
                        <p class="py-6 text-xl">Hello , I am Dip, i am from Sylhet,Bangladesh. Currently i am taking web devlopment class in programming hero. I want to be a dveloper in future. Already i learnet many things that i can introduce my self as a junior web developer.</p>
                        <div>

                            <label for="my-modal-3" class="btn modal-button">Projects</label>


                            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box relative">
                                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="text-lg font-bold">CARHOUSE : https://adorable-jalebi-7f7243.netlify.app/</h3>
                                    <h3 class="text-lg font-bold">MAC REVIEW : https://peaceful-douhua-f1613e.netlify.app/home</h3>
                                    <h3 class="text-lg font-bold">Build Muscle : https://assignment-10-8761e.web.app/</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyPortfolio;