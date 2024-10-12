import {Link} from "react-router-dom"

const NotFound :React.FC = () => {

    return(
        <div className="w-full flex-col justify-start items-center lg:gap-16 gap-10 inline-flex lg:pt-[180px] pt-12 lg:pb-28 pb-12">
        <div className="relative h-[calc(550px-85px)] flex justify-center items-center flex-col">
          <svg width="314" height="171" viewBox="0 0 314 171" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M131.408 134.14L131.407 134.139C124.251 129.827 118.724 123.793 114.83 116.051L114.829 116.049C110.981 108.307 109.065 99.3201 109.065 89.1025C109.065 78.885 110.981 69.8983 114.829 62.156L114.83 62.1539C118.724 54.4117 124.251 48.3783 131.407 44.0663L131.408 44.0655C138.616 39.75 147.163 37.6025 157.029 37.6025C166.894 37.6025 175.419 39.7498 182.582 44.0659C189.784 48.3778 195.311 54.4115 199.16 62.1549C203.054 69.8975 204.993 78.8846 204.993 89.1025C204.993 99.3208 203.054 108.308 199.16 116.051C199.16 116.051 199.159 116.051 199.159 116.051L198.713 115.827C194.905 123.488 189.442 129.449 182.325 133.711L131.408 134.14ZM131.408 134.14C138.616 138.455 147.163 140.603 157.029 140.603C166.894 140.603 175.419 138.455 182.582 134.139L131.408 134.14ZM43.4542 138.063V138.563H43.9542H62.7222H63.2222V138.063V123.331H71.4262H71.9262V122.831V105.559V105.059H71.4262H63.2222V81.0785V80.5785H62.7222H43.9542H43.4542V81.0785V105.059H23.3911L53.9264 40.3559L54.2631 39.6425H53.4742H32.2582H31.9413L31.8061 39.9291L0.934056 105.345L0.88623 105.446V105.559V122.831V123.331H1.38623H43.4542V138.063ZM181.318 106.729L181.317 106.732C179.31 111.726 176.288 115.563 172.254 118.267C168.232 120.963 163.171 122.284 157.036 122.195C150.898 122.105 145.83 120.695 141.803 117.995C137.767 115.29 134.722 111.495 132.671 106.591C130.661 101.678 129.649 95.853 129.649 89.1025C129.649 82.3519 130.661 76.4793 132.672 71.4739C134.724 66.4795 137.769 62.6418 141.803 59.9379C145.825 57.2419 150.887 55.9209 157.021 56.0105C163.16 56.1001 168.227 57.5104 172.254 60.2099C176.29 62.9151 179.312 66.709 181.318 71.6119L181.319 71.6154C183.374 76.5274 184.409 82.3523 184.409 89.1025C184.409 95.8524 183.374 101.724 181.318 106.729ZM284.642 138.063V138.563H285.142H303.91H304.41V138.063V123.331H312.614H313.114V122.831V105.559V105.059H312.614H304.41V81.0785V80.5785H303.91H285.142H284.642V81.0785V105.059H264.579L295.114 40.3559L295.451 39.6425H294.662H273.446H273.129L272.994 39.9291L242.122 105.345L242.074 105.446V105.559V122.831V123.331H242.574H284.642V138.063Z"
              fill="#EEF2FF"
              stroke="#4F46E5"
            />
            <ellipse cx="160.123" cy="81" rx="28.0342" ry="28.0342" fill="#EEF2FF" />
            <path
              d="M179.3 61.3061L179.3 61.3058C168.559 50.5808 151.17 50.5804 140.444 61.3061C129.703 72.0316 129.703 89.4361 140.444 100.162C151.17 110.903 168.559 110.903 179.3 100.162C190.026 89.4364 190.026 72.0317 179.3 61.3061ZM185.924 54.6832C200.31 69.0695 200.31 92.3985 185.924 106.785C171.522 121.171 148.208 121.171 133.806 106.785C119.42 92.3986 119.42 69.0693 133.806 54.6832C148.208 40.2973 171.522 40.2974 185.924 54.6832ZM201.706 137.498L201.707 137.498L201.707 137.499C203.614 138.497 206.563 138.087 208.035 136.615C209.507 135.143 209.097 132.194 208.099 130.287L208.099 130.286L208.098 130.285L203.527 120.86C203.527 120.859 203.527 120.859 203.526 120.858C202.529 118.952 199.579 118.541 198.107 120.013C196.635 121.485 197.045 124.435 198.517 125.907L198.517 125.908L198.519 125.911L201.706 137.498Z"
              fill="#4F46E5"
              stroke="#EEF2FF"
            />
          </svg>
          <div className="lg:mt-12 mt-10 flex-col justify-center items-center gap-6 inline-flex">
            <div className="text-center text-slate-900 text-[32px] font-bold leading-9">404</div>
            <div className="text-center text-slate-500 text-base font-medium leading-snug">
              Page not found, let's get you back home.
            </div>
            <Link
              to="/"
              className="py-2 px-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow flex justify-center items-center gap-2"
            >
              <div className="text-white text-base font-medium leading-snug">Take me back</div>
            </Link>
          </div>
        </div>
      
    </div>
    )


}

export default NotFound;
