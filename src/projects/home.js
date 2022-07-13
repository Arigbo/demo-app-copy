import React from "react";
import ButtonComp from "./button";
import PlayComp from "./play";
const HomeComp = () => {
  return (
    <div className="body">
      <div className="hero">
        <div className="hero-left">
          <p>
            The fast
            <br />
            affordable way to deliver goods.
          </p>
          <ButtonComp name="Let's help you deliver" />
        </div>
        <div className="hero-right">
          <img src="./pictures/pic1.png" alt="/" />
        </div>
      </div>
      <div className="hero">
        <div className="hero-right">
          <img src="./pictures/pic2.png" alt="/" />
        </div>
        <div className="hero-left">
          <p>The Best Delivery Drivers You’ve ever seen.</p>
        </div>
      </div>
      <div className="hero">
        <div className="hero-left">
          <p>
            Quality Riders Ready to deliver.{" "}
            <p className="txt">
              There will always be one nearby to pickup your parcels and more.
            </p>
          </p>
          <ButtonComp name="Let's help you deliver" />
        </div>
        <div className="hero-right">
          <img src="./pictures/pic3.png" alt="/" />
        </div>
      </div>
      <div className="hero">
        <div className="hero-right">
          <img src="./pictures/pic4.png" alt="/" />
        </div>
        <div className="hero-left">
          <p>
            Got A Bike Van or Truck?
            <p className="txt">
              If you own any of the above listed and looking to double your
              earning capacity. Dropple go you covered.
            </p>
          </p>
          <ButtonComp name="Let's help you deliver" />
        </div>
      </div>
      <div className="earn">Earn extra money delivering</div>
      <div className="grid-container">
        <div className="grid-item">
          All Deliveries in One App Downloading{" "}
          <p className="txt2">
            multiple apps to get multiple delivery types done is now a thing of
            the past.
          </p>
        </div>
        <div className="grid-item">
          Delivery Tracking{" "}
          <p className="txt2">
            Watch your items go from pick up to delivery in real time! You can
            also share the tracking link with your customers.
          </p>
        </div>
        <div className="grid-item">
          Multi-point Deliveries{" "}
          <p className="txt2">
            Got a lot of items to send out? You can use one pilot to make all
            your deliveries.
          </p>
        </div>
        <div className="grid-item">
          Resend Orders{" "}
          <p className="txt2">
            Think you’ve made an order before? It wasn’t deja vu - our order
            resend feature is proof of that. Make it again without having to
            fill those details right from the start.
          </p>
        </div>
        <div className="grid-item class">
          Shedule pickup{" "}
          <p className="txt2">
            Need to have your item picked up at a specific time? We’ve got that
            covered.
          </p>
        </div>
        <div className="grid-item">
          Saved Adresses{" "}
          <p className="txt2">
            You can save your addresses for next time, so you won’t have to type
            it again. Just tap and keep things moving.
          </p>
        </div>
      </div>
      <div className="play">
        <div className="play-flex">
          <div className="play-left">
            <p className=" download">Download Dropple App</p>
            <p className="txt3">Available for iOS and Andriod</p>
            <div className="button-flex">
              <PlayComp
                logo=<img src="./pictures/play.png" alt="/" />
                name="GET IT ON"
                store="Play Store"
              />
              <PlayComp
                logo=<i class="fa-brands fa-apple" />
                name="GET IT ON"
                store="Apple Store"
              />
            </div>
          </div>
          <div className="play-right">
            <img src="./pictures/pic5.png" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
