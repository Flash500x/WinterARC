import React, { useEffect } from "react";

const Snowfall = () => {
  useEffect(() => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const defaultOptions = {
      minSize: 10,
      maxSize: 30,
      type: "image",
      content: ["/flake1.png", "/flake2.png", "/flake3.png"],
      fadeOut: true,
      autoplay: true,
      interval: 200,
    };

    function random(min, max, deviation) {
      if (deviation) {
        deviation *= max;
        max = max + deviation;
        min = max - deviation;
      } else {
        min = min || 0;
      }
      return parseInt(Math.random() * (max - min + 1) + min);
    }

    function extend(target, source) {
      for (let prop in source) target[prop] = source[prop];
      return target;
    }

    function Snowfall(newOptions) {
      let queue = [],
        options = extend({}, defaultOptions),
        $snowfield = document.createElement("div"),
        isImage,
        cntLength,
        $snowflake,
        timer;

      function config(newOptions) {
        extend(options, newOptions);
        isImage = options.type === "image";
        cntLength = options.content.length;
        $snowflake = isImage ? new Image() : document.createElement("div");
        $snowflake.className = "snowflake snowflake-" + options.type;
      }

      config(newOptions);

      function Snowflake() {
        const _$snowflake = $snowflake.cloneNode();
        if (options.type !== "solid") {
          if (isImage) {
            const randomIndex = Math.floor(Math.random() * cntLength);
            _$snowflake.src = options.content[randomIndex];
          } else {
            _$snowflake.innerHTML =
              typeof options.content === "string"
                ? options.content
                : options.content[Math.floor(Math.random() * cntLength)];
          }
        }
        return _$snowflake;
      }

      function snowAnimate() {
        const size = random(options.minSize, options.maxSize),
          top = -2 * size,
          left = random(0, window.innerWidth - size),
          opacity = random(5, 10) / 10,
          angle = random(null, window.innerHeight * 0.8, 1),
          translateX = random(-100, 100),
          translateY = window.innerHeight + size * 2,
          duration = random(null, window.innerHeight * 20, 0.2);

        let _$snowflake;
        if (queue.length) {
          _$snowflake = queue.shift();
        } else {
          _$snowflake = new Snowflake();
        }

        _$snowflake.style.top = top + "px";
        _$snowflake.style.left = left + "px";
        _$snowflake.style.opacity = opacity;
        _$snowflake.style.width = size + "px";
        _$snowflake.style.height = size + "px";
        _$snowflake.style.transition = `${duration}ms linear`;
        _$snowflake.style.transform = "none";

        $snowfield.appendChild(_$snowflake);

        setTimeout(() => {
          _$snowflake.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${angle}deg)`;
          _$snowflake.style.opacity = options.fadeOut ? 0 : opacity;
        }, 100);

        _$snowflake.addEventListener("transitionend", () => {
          $snowfield.removeChild(_$snowflake);
          queue.push(_$snowflake);
        });
      }

      let playing = false;

      function play() {
        if (playing) return;
        timer = setInterval(snowAnimate, options.interval);
        playing = true;
      }

      function stop() {
        if (!playing) return;
        clearInterval(timer);
        playing = false;
      }

      $snowfield.className = "snowfield";
      document.body.appendChild($snowfield);
      if (options.autoplay) play();

      return { play, stop };
    }

    const snow = new Snowfall();
    return () => {
      document.querySelector(".snowfield")?.remove();
    };
  }, []);

  return (
    <style>{`
      .snowfield {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 9999;
      }

      .snowflake {
        position: absolute;
        color: #fff;
        line-height: 1;
        pointer-events: none;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        will-change: transform, opacity;
      }

      .snowflake-image {
        border-radius: 50%;
        background: none;
      }
    `}</style>
  );
};

export default Snowfall;