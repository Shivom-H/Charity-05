import React from 'react'
import HeroImg from "../../resources/images/hero_image.jpg"

export default function Main() {
    return (
        <div className="hero-img-custom">
            <div className="hero-heading">
                <h1>
                    Helping Around <br/>
                    <strong>The World</strong>
                </h1>

                <button type="button" class="btn btn-primary pill"> GET STARTED </button>
            </div>

            <div className="hero-footer">

                <div className="row">
                    <div className="col-4">
                    <h1 className="text-center">01</h1>
                    </div>
                    <div className="col-4">
                    <h1 className="text-center">02</h1>
                    </div>
                    <div className="col-4">
                    <h1 className="text-center">03</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}
