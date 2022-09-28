const navbar = () =>{
    return `<div id="topnav">
    <div id="topbtn">
        <div id="usic">
            <img src="https://cdn-icons-png.flaticon.com/128/323/323310.png" alt="">
            <p>us-USD</p>
        </div>
        <div id="idhelpnav">Help</div>
    </div>
</div>
<div id="middlenav">
    <a href="./index.html">
    <svg class="headerLogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 280 79">
        <defs>
          <path id="a" d="M18.834.144H.06v48.337h37.549V.144z"/>
          <path id="c" d="M0 13h158V0H0z"/>
          <path id="e" d="M.294.03h8.677v10.944H.294z"/>
          <path id="g" d="M0 10.975h123.946V.03H0z"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="b" fill="#fff">
            <use xlink:href="#a"/>
          </mask>
          <path d="M8.077 32.002c0 1.767.301 3.274.905 4.523a8.165 8.165 0 002.52 3.07c1.076.798 2.315 1.379 3.716 1.745 1.399.366 2.918.549 4.556.549 1.766 0 3.273-.204 4.523-.614 1.249-.409 2.262-.937 3.037-1.583.775-.646 1.335-1.389 1.681-2.23a6.672 6.672 0 00.516-2.552c0-1.766-.398-3.07-1.195-3.909-.798-.841-1.67-1.432-2.617-1.778-1.638-.602-3.544-1.173-5.719-1.712a395.982 395.982 0 01-8.046-2.1c-1.981-.517-3.63-1.196-4.943-2.036-1.315-.84-2.359-1.777-3.134-2.811-.775-1.034-1.325-2.132-1.647-3.295a13.186 13.186 0 01-.486-3.555c0-2.326.486-4.339 1.454-6.042A12.943 12.943 0 017.043 3.44c1.594-1.12 3.403-1.949 5.429-2.488A23.803 23.803 0 0118.61.144c2.413 0 4.686.313 6.818.937 2.133.625 4.007 1.562 5.622 2.811a13.796 13.796 0 013.846 4.62c.946 1.832 1.421 3.953 1.421 6.366h-8.078c-.215-2.973-1.227-5.073-3.037-6.301-1.809-1.228-4.115-1.842-6.915-1.842-.948 0-1.917.097-2.907.291a9.251 9.251 0 00-2.715.969 5.967 5.967 0 00-2.035 1.842c-.539.775-.808 1.745-.808 2.908 0 1.638.506 2.919 1.519 3.845 1.012.927 2.336 1.626 3.974 2.1.171.043.85.226 2.036.549 1.184.324 2.508.679 3.973 1.067 1.465.387 2.898.765 4.298 1.131a171.1 171.1 0 013.005.807c1.508.475 2.821 1.121 3.941 1.939a12.456 12.456 0 012.812 2.811 11.661 11.661 0 011.68 3.393c.366 1.206.549 2.413.549 3.618 0 2.585-.528 4.793-1.583 6.624a13.436 13.436 0 01-4.169 4.491c-1.722 1.163-3.682 2.014-5.879 2.553a28.165 28.165 0 01-6.721.808c-2.628 0-5.106-.324-7.432-.97-2.326-.646-4.351-1.636-6.074-2.972-1.724-1.335-3.102-3.048-4.136-5.138C.581 37.312.042 34.845 0 32.002h8.077" fill="#242B2D" fill-rule="nonzero" mask="url(#b)"/>
          <path d="M43.166 1.242h7.366v26.237l13.313-13.506h9.047L60.097 26.251l14.022 21.131h-8.982l-10.21-16.22-4.395 4.265v11.955h-7.366V1.242m34.056 46.14h7.366V13.973h-7.366v33.409zm0-39.161h7.366V1.242h-7.366v6.979zm14.732 5.752h6.98v4.911l.129.129c1.12-1.851 2.585-3.305 4.394-4.362 1.81-1.055 3.813-1.583 6.01-1.583 3.661 0 6.548.948 8.659 2.843 2.11 1.897 3.166 4.74 3.166 8.53v22.941h-7.366V26.38c-.087-2.627-.647-4.534-1.681-5.719-1.033-1.184-2.649-1.777-4.847-1.777-1.25 0-2.369.226-3.36.679a7.265 7.265 0 00-2.519 1.874c-.69.797-1.228 1.734-1.617 2.811a10.051 10.051 0 00-.581 3.424v19.71h-7.367V13.973m42.778 18.029c0 1.767.301 3.274.906 4.523a8.153 8.153 0 002.519 3.07c1.076.798 2.316 1.379 3.716 1.745 1.4.366 2.918.549 4.556.549 1.766 0 3.273-.204 4.523-.614 1.249-.409 2.262-.937 3.037-1.583.776-.646 1.335-1.389 1.681-2.23a6.673 6.673 0 00.517-2.552c0-1.766-.399-3.07-1.196-3.909-.798-.841-1.67-1.432-2.617-1.778-1.638-.602-3.544-1.173-5.719-1.712a397.717 397.717 0 01-8.046-2.1c-1.981-.517-3.629-1.196-4.943-2.036-1.314-.84-2.358-1.777-3.134-2.811-.775-1.034-1.325-2.132-1.647-3.295a13.226 13.226 0 01-.486-3.555c0-2.326.486-4.339 1.455-6.042a12.94 12.94 0 013.844-4.232c1.594-1.12 3.404-1.949 5.429-2.488a23.805 23.805 0 016.139-.808c2.412 0 4.685.313 6.817.937 2.133.625 4.007 1.562 5.622 2.811a13.785 13.785 0 013.846 4.62c.946 1.832 1.421 3.953 1.421 6.366h-8.077c-.216-2.973-1.228-5.073-3.038-6.301-1.809-1.228-4.115-1.842-6.915-1.842-.948 0-1.917.097-2.907.291a9.251 9.251 0 00-2.715.969 5.967 5.967 0 00-2.035 1.842c-.539.775-.807 1.745-.807 2.908 0 1.638.505 2.919 1.518 3.845 1.012.927 2.336 1.626 3.974 2.1.172.043.85.226 2.036.549 1.184.324 2.509.679 3.974 1.067 1.464.387 2.897.765 4.297 1.131s2.402.636 3.005.807c1.508.475 2.822 1.121 3.942 1.939a12.472 12.472 0 012.811 2.811 11.636 11.636 0 011.68 3.393c.366 1.206.55 2.413.55 3.618 0 2.585-.529 4.793-1.583 6.624a13.456 13.456 0 01-4.169 4.491c-1.723 1.163-3.683 2.014-5.88 2.553a28.16 28.16 0 01-6.721.808c-2.628 0-5.105-.324-7.431-.97-2.327-.646-4.352-1.636-6.075-2.972-1.723-1.335-3.101-3.048-4.135-5.138-1.035-2.089-1.574-4.556-1.616-7.399h8.077m31.535-18.029h5.557V3.957h7.367v10.016h6.656v5.492h-6.656v17.836c0 .775.033 1.444.097 2.003.065.561.215 1.034.452 1.422.237.388.592.678 1.067.872.473.194 1.12.291 1.938.291.518 0 1.034-.01 1.551-.032a7.604 7.604 0 001.551-.227v5.687c-.819.086-1.616.172-2.391.259-.775.086-1.573.129-2.391.129-1.938 0-3.501-.184-4.685-.549-1.186-.366-2.111-.905-2.778-1.616-.669-.711-1.121-1.604-1.358-2.682-.237-1.076-.377-2.304-.42-3.683v-19.71h-5.557v-5.492m39.548 28.498c1.637 0 3.059-.344 4.265-1.034a8.995 8.995 0 002.973-2.714 11.868 11.868 0 001.713-3.781c.365-1.399.548-2.832.548-4.297 0-1.422-.183-2.843-.548-4.265-.367-1.421-.938-2.682-1.713-3.78a9.13 9.13 0 00-2.973-2.682c-1.206-.688-2.628-1.034-4.265-1.034-1.637 0-3.059.346-4.264 1.034a9.12 9.12 0 00-2.973 2.682c-.775 1.098-1.347 2.359-1.713 3.78a17.047 17.047 0 00-.549 4.265c0 1.465.183 2.898.549 4.297a11.846 11.846 0 001.713 3.781 8.985 8.985 0 002.973 2.714c1.205.69 2.627 1.034 4.264 1.034zm0 5.816c-2.671 0-5.051-.443-7.14-1.325-2.09-.883-3.857-2.1-5.299-3.651-1.444-1.551-2.542-3.403-3.296-5.558-.754-2.153-1.131-4.523-1.131-7.108 0-2.541.377-4.889 1.131-7.044.754-2.153 1.852-4.006 3.296-5.557 1.442-1.551 3.209-2.768 5.299-3.651 2.089-.883 4.469-1.325 7.14-1.325 2.671 0 5.051.442 7.141 1.325 2.089.883 3.856 2.1 5.299 3.651 1.443 1.551 2.542 3.404 3.296 5.557.753 2.155 1.131 4.503 1.131 7.044 0 2.585-.378 4.955-1.131 7.108-.754 2.155-1.853 4.007-3.296 5.558-1.443 1.551-3.21 2.768-5.299 3.651-2.09.882-4.47 1.325-7.141 1.325zM228.173 13.973h6.915v6.462h.129c.215-.905.635-1.787 1.26-2.65a12.317 12.317 0 012.261-2.358 11.462 11.462 0 012.941-1.713 8.812 8.812 0 013.296-.646c.861 0 1.454.022 1.777.065.323.043.656.087 1.001.129v7.108a35.878 35.878 0 00-1.583-.226 13.417 13.417 0 00-1.583-.097c-1.25 0-2.423.248-3.522.743a8.1 8.1 0 00-2.876 2.197c-.819.97-1.464 2.165-1.938 3.587-.475 1.422-.711 3.059-.711 4.911v15.897h-7.367V13.973m43.878 13.764a11.917 11.917 0 00-.743-3.36c-.41-1.077-.969-2.014-1.68-2.811a8.337 8.337 0 00-2.585-1.939c-1.013-.495-2.144-.743-3.393-.743-1.292 0-2.466.226-3.521.679a8.039 8.039 0 00-2.715 1.874 9.257 9.257 0 00-1.808 2.811 9.747 9.747 0 00-.744 3.489h17.189zm-17.189 4.847c0 1.292.183 2.542.549 3.748.365 1.206.915 2.261 1.648 3.166.732.905 1.658 1.627 2.779 2.165 1.12.539 2.455.808 4.007.808 2.153 0 3.887-.463 5.201-1.39 1.314-.926 2.294-2.315 2.94-4.168h6.98c-.388 1.81-1.057 3.425-2.004 4.847a13.922 13.922 0 01-3.425 3.586 14.771 14.771 0 01-4.491 2.198 18.125 18.125 0 01-5.201.743c-2.629 0-4.955-.431-6.98-1.293-2.025-.861-3.738-2.068-5.137-3.618-1.401-1.552-2.455-3.403-3.166-5.558-.711-2.154-1.067-4.523-1.067-7.108 0-2.369.377-4.621 1.131-6.753.753-2.133 1.831-4.007 3.231-5.622a15.445 15.445 0 015.073-3.845c1.981-.947 4.221-1.422 6.72-1.422 2.627 0 4.987.549 7.077 1.648 2.088 1.099 3.822 2.553 5.202 4.362 1.378 1.809 2.38 3.888 3.005 6.236.624 2.348.785 4.772.484 7.27h-24.556zM5.609 73.431c.294.395.614.675.962.837a2.75 2.75 0 001.169.242c.851 0 1.505-.303 1.96-.908.456-.606.683-1.469.683-2.589 0-.594-.052-1.104-.157-1.53-.105-.425-.256-.774-.454-1.046a1.76 1.76 0 00-.728-.599 2.423 2.423 0 00-.98-.189c-.522 0-.979.121-1.371.36-.393.24-.754.579-1.084 1.016v4.406zm-.081-5.503a4.715 4.715 0 011.331-1.142c.503-.288 1.079-.431 1.726-.431.527 0 1.004.1 1.43.3.426.202.788.498 1.088.891.3.393.53.88.692 1.461.162.582.243 1.25.243 2.006 0 .671-.09 1.296-.27 1.874a4.497 4.497 0 01-.778 1.502 3.649 3.649 0 01-1.24.998 3.657 3.657 0 01-1.65.364c-.558 0-1.036-.095-1.434-.283a3.37 3.37 0 01-1.057-.787v4.028H4V66.517h.962c.227 0 .368.11.422.332l.144 1.079zm13.937 3.596c-.737.025-1.365.083-1.884.176-.518.093-.941.214-1.267.365-.327.149-.564.326-.711.53-.147.204-.22.431-.22.683 0 .24.039.447.117.621.078.173.184.316.319.427.135.111.293.192.477.242.182.051.379.077.588.077.282 0 .54-.029.774-.085a2.96 2.96 0 00.661-.247c.207-.109.404-.238.593-.387.189-.151.373-.321.553-.513v-1.889zm-5.17-3.722a5.187 5.187 0 011.628-1.088 5.034 5.034 0 011.933-.359c.509 0 .962.084 1.358.252.395.167.728.401.998.701.269.299.473.662.611 1.088.138.425.207.893.207 1.402v5.827h-.71a.696.696 0 01-.36-.076c-.084-.051-.15-.151-.198-.302l-.18-.863a8.5 8.5 0 01-.701.589 3.955 3.955 0 01-1.524.702 4.475 4.475 0 01-.949.094c-.354 0-.687-.049-.998-.149a2.303 2.303 0 01-.814-.444 2.091 2.091 0 01-.548-.751c-.135-.303-.203-.661-.203-1.075 0-.36.1-.705.297-1.038.198-.333.518-.628.962-.886.444-.258 1.022-.469 1.736-.634.713-.165 1.588-.26 2.625-.283v-.711c0-.707-.153-1.242-.458-1.605-.306-.362-.753-.544-1.34-.544-.396 0-.727.05-.994.149-.267.099-.498.21-.692.332a12.42 12.42 0 00-.504.333.722.722 0 01-.418.148.462.462 0 01-.279-.085.779.779 0 01-.197-.211l-.288-.513zm11.141.54c.287-.623.641-1.11 1.061-1.461.419-.351.932-.526 1.537-.526.192 0 .376.021.553.062.177.042.334.108.472.198l-.116 1.197c-.037.149-.126.224-.27.224-.084 0-.207-.018-.369-.054a2.537 2.537 0 00-.548-.054c-.288 0-.544.042-.769.126a1.814 1.814 0 00-.603.373 2.654 2.654 0 00-.477.611c-.14.243-.268.521-.381.832v5.755h-1.61v-9.108h.917c.174 0 .294.033.36.098.065.067.111.18.135.342l.108 1.385m8.272 7.427c-.72 0-1.273-.201-1.66-.603-.386-.401-.58-.979-.58-1.735v-5.574h-1.096a.36.36 0 01-.243-.086c-.066-.057-.099-.146-.099-.265v-.639l1.493-.189.368-2.815a.356.356 0 01.369-.305h.809v3.138h2.635v1.161h-2.635v5.466c0 .384.093.668.279.855.185.185.426.278.719.278.168 0 .313-.022.436-.067.123-.045.23-.095.319-.149.09-.053.167-.103.23-.148a.3.3 0 01.166-.068c.084 0 .159.051.225.154l.467.763c-.275.258-.608.46-.998.608-.389.146-.791.22-1.204.22M46.7 74.501c.899 0 1.571-.301 2.015-.903.443-.603.665-1.444.665-2.523 0-1.085-.222-1.929-.665-2.536-.444-.604-1.116-.908-2.015-.908-.455 0-.853.078-1.191.234a2.22 2.22 0 00-.845.674 2.996 2.996 0 00-.504 1.084 5.808 5.808 0 00-.166 1.452c0 1.079.223 1.92.67 2.523.446.602 1.125.903 2.036.903zm0-8.129c.666 0 1.265.111 1.799.333.533.222.988.537 1.366.944.378.408.667.901.868 1.48.201.578.301 1.224.301 1.937 0 .719-.1 1.367-.301 1.943a4.153 4.153 0 01-.868 1.474 3.808 3.808 0 01-1.366.94c-.534.219-1.133.328-1.799.328-.671 0-1.275-.109-1.812-.328a3.802 3.802 0 01-1.371-.94 4.137 4.137 0 01-.867-1.474c-.202-.576-.302-1.224-.302-1.943 0-.713.1-1.359.302-1.937.2-.579.489-1.072.867-1.48a3.862 3.862 0 011.371-.944c.537-.222 1.141-.333 1.812-.333zm7.203 9.253v-7.742l-1.008-.116a.822.822 0 01-.31-.14c-.081-.063-.121-.154-.121-.274v-.657h1.439v-.881c0-.522.073-.985.22-1.389.147-.404.356-.746.629-1.026.273-.278.601-.49.985-.633a3.658 3.658 0 011.294-.216c.408 0 .783.06 1.124.18l-.035.8c-.012.144-.092.222-.238.234a7.617 7.617 0 01-.59.018c-.275 0-.526.035-.75.108a1.41 1.41 0 00-.58.35 1.577 1.577 0 00-.373.639c-.087.264-.131.591-.131.98v.836h2.626v1.161h-2.572v7.768h-1.609m13.676.144c-.72 0-1.273-.201-1.659-.603-.387-.401-.58-.979-.58-1.735v-5.574h-1.097a.36.36 0 01-.243-.086c-.066-.057-.099-.146-.099-.265v-.639l1.493-.189.368-2.815a.393.393 0 01.121-.219.356.356 0 01.248-.086h.809v3.138h2.635v1.161H66.94v5.466c0 .384.093.668.279.855.185.185.426.278.719.278.168 0 .314-.022.436-.067.123-.045.23-.095.32-.149.089-.053.166-.103.229-.148a.3.3 0 01.166-.068c.084 0 .159.051.225.154l.467.763c-.275.258-.608.46-.998.608-.389.146-.791.22-1.204.22m5.709-8.038a4.83 4.83 0 011.295-.99c.473-.246 1.019-.369 1.636-.369.498 0 .937.083 1.318.248.38.165.698.399.953.701.255.303.448.667.58 1.093.132.425.198.896.198 1.411v5.8h-1.61v-5.8c0-.689-.157-1.224-.472-1.604-.315-.381-.793-.572-1.434-.572-.473 0-.916.115-1.327.342-.41.228-.789.536-1.137.926v6.708h-1.609V62.38h1.609v5.351" fill="#242B2D" fill-rule="nonzero"/>
          <g transform="translate(81 66)">
            <mask id="d" fill="#fff">
              <use xlink:href="#c"/>
            </mask>
            <path d="M7.413 3.814c0-.383-.058-.733-.176-1.05a2.345 2.345 0 00-.513-.825c-.225-.231-.5-.41-.821-.537a3.01 3.01 0 00-1.099-.188c-.859 0-1.539.23-2.038.69-.501.459-.811 1.096-.932 1.91h5.579zm1.45 4.398c-.22.246-.486.46-.795.642-.309.183-.64.332-.992.45a7.127 7.127 0 01-2.21.352c-.706 0-1.356-.11-1.95-.33a4.31 4.31 0 01-1.54-.963A4.351 4.351 0 01.362 6.795C.12 6.172 0 5.456 0 4.648c0-.655.11-1.266.328-1.832a4.249 4.249 0 01.942-1.478 4.34 4.34 0 011.5-.98C3.361.118 4.026 0 4.765 0c.61 0 1.176.095 1.697.283.52.188.97.46 1.349.815.38.355.676.792.891 1.314.215.522.323 1.115.323 1.781 0 .26-.03.432-.091.519-.06.086-.175.13-.342.13H1.773c.02.591.109 1.107.268 1.546.157.438.376.803.658 1.097.283.293.619.512 1.007.656.39.146.827.218 1.31.218.45 0 .838-.048 1.164-.143a6.002 6.002 0 001.43-.62c.157-.096.293-.144.408-.144.148 0 .262.053.342.158l.503.602zm144.082-3.173c.363 0 .681-.046.957-.139.275-.092.506-.222.694-.389a1.58 1.58 0 00.423-.596c.094-.233.142-.487.142-.764 0-.574-.19-1.03-.57-1.37-.38-.339-.928-.51-1.646-.51-.726 0-1.278.171-1.657.51-.38.34-.569.796-.569 1.37 0 .277.048.531.146.764.097.23.24.43.428.596.188.167.42.297.695.39.275.092.594.138.957.138zm3.233 5.09a.756.756 0 00-.211-.554 1.433 1.433 0 00-.57-.334 4.006 4.006 0 00-.83-.17c-.316-.035-.65-.061-1.003-.079-.352-.02-.71-.038-1.073-.055-.363-.02-.711-.05-1.047-.093-.375.16-.683.362-.922.606a1.181 1.181 0 00-.357.856c0 .21.06.406.177.588.116.182.297.34.539.472.24.133.544.238.911.315.366.076.797.116 1.294.116.483 0 .916-.04 1.298-.12a3.46 3.46 0 00.974-.344c.264-.148.468-.324.609-.527.14-.204.21-.43.21-.676zM158 .616v.611c0 .203-.14.333-.422.388l-1.158.14c.228.407.342.857.342 1.35 0 .457-.096.872-.286 1.245a2.889 2.889 0 01-.791.958c-.336.265-.74.47-1.209.611-.47.142-.98.213-1.531.213-.477 0-.926-.052-1.35-.157a1.76 1.76 0 00-.494.394.657.657 0 00-.171.42c0 .223.1.391.298.505.197.114.458.196.78.245.322.05.69.081 1.103.092.413.014.835.033 1.269.061.433.028.857.075 1.269.143.413.07.78.18 1.103.334.322.154.583.367.78.639.198.27.298.623.298 1.054 0 .402-.11.79-.327 1.168-.219.375-.532.71-.942 1.004-.41.293-.912.526-1.506.702-.595.176-1.264.265-2.01.265-.744 0-1.396-.068-1.953-.204-.558-.136-1.021-.318-1.39-.545-.37-.229-.646-.494-.83-.792a1.765 1.765 0 01-.278-.94c0-.462.157-.854.473-1.176.316-.32.748-.576 1.3-.768a1.852 1.852 0 01-.72-.495c-.179-.207-.267-.486-.267-.838 0-.136.027-.276.08-.42.054-.146.136-.291.247-.436.11-.144.246-.282.407-.412.162-.13.35-.243.565-.342a3.036 3.036 0 01-1.178-1.032c-.283-.43-.424-.927-.424-1.495 0-.457.097-.872.287-1.246.192-.373.458-.69.8-.953.344-.263.751-.464 1.225-.606a5.388 5.388 0 011.556-.214c.442 0 .856.046 1.239.135.383.09.731.22 1.047.394H158z" fill="#242B2D" fill-rule="nonzero" mask="url(#d)"/>
          </g>
          <path d="M242.519 68.435c.288-.623.641-1.111 1.061-1.461.42-.351.932-.527 1.538-.527.191 0 .376.022.553.063.176.042.334.108.472.198l-.117 1.196c-.036.15-.126.225-.27.225-.084 0-.206-.019-.369-.054a2.524 2.524 0 00-.548-.054c-.287 0-.544.042-.769.126a1.8 1.8 0 00-.602.373 2.654 2.654 0 00-.477.611 5.24 5.24 0 00-.382.832v5.755H241v-9.109h.917c.174 0 .293.034.359.099.066.066.111.18.135.342l.108 1.385m8.947 6.159c.899 0 1.57-.301 2.014-.904.444-.602.666-1.443.666-2.522 0-1.085-.222-1.93-.666-2.536-.444-.605-1.115-.908-2.014-.908-.455 0-.853.078-1.191.234a2.222 2.222 0 00-.846.674 2.994 2.994 0 00-.503 1.084 5.808 5.808 0 00-.166 1.452c0 1.079.223 1.92.669 2.522.447.603 1.126.904 2.037.904zm0-8.129c.666 0 1.265.111 1.798.333.534.222.989.537 1.367.944.378.407.667.901.868 1.48.2.578.301 1.223.301 1.937 0 .719-.101 1.366-.301 1.943a4.153 4.153 0 01-.868 1.474 3.816 3.816 0 01-1.367.94c-.533.218-1.132.328-1.798.328-.671 0-1.275-.11-1.812-.328a3.797 3.797 0 01-1.371-.94 4.153 4.153 0 01-.868-1.474c-.201-.577-.301-1.224-.301-1.943 0-.714.1-1.359.301-1.937.201-.579.49-1.073.868-1.48a3.844 3.844 0 011.371-.944c.537-.222 1.141-.333 1.812-.333zm14.296.144v9.109h-.953c-.228 0-.372-.111-.432-.333l-.125-.98c-.396.438-.84.79-1.331 1.057-.492.267-1.056.399-1.691.399-.497 0-.936-.082-1.317-.247a2.609 2.609 0 01-.958-.696 2.976 2.976 0 01-.58-1.089 4.843 4.843 0 01-.193-1.411v-5.809h1.6v5.809c0 .689.158 1.223.473 1.601.315.377.796.566 1.443.566.473 0 .916-.112 1.326-.337.411-.225.79-.535 1.137-.931v-6.708h1.601m4.595 6.915c.294.395.614.674.962.836.348.162.737.243 1.169.243.851 0 1.505-.303 1.96-.909.456-.605.684-1.468.684-2.588 0-.594-.053-1.104-.158-1.53-.105-.426-.256-.774-.454-1.047a1.758 1.758 0 00-.728-.598 2.423 2.423 0 00-.98-.189c-.522 0-.979.12-1.371.36-.393.24-.754.579-1.084 1.016v4.406zm-.081-5.503a4.715 4.715 0 011.331-1.142c.504-.288 1.079-.432 1.726-.432.528 0 1.004.101 1.43.301.426.201.788.498 1.088.891.3.392.531.88.692 1.461.162.582.243 1.25.243 2.006 0 .67-.089 1.295-.27 1.874a4.514 4.514 0 01-.777 1.502 3.686 3.686 0 01-1.241.998 3.657 3.657 0 01-1.65.364c-.558 0-1.036-.095-1.434-.283a3.385 3.385 0 01-1.057-.787v4.028h-1.609V66.609h.962c.227 0 .368.111.422.332l.144 1.08z" fill="#242B2D" fill-rule="nonzero"/>
          <g>
            <path fill="#1D1D1B" fill-rule="nonzero" d="M98 65v11h7v-1.85h-5.013V65zM109.32 67.79c-.467.627-.7 1.532-.7 2.712 0 1.18.233 2.085.7 2.712.468.628 1.134.942 1.997.942.852 0 1.513-.314 1.98-.942.468-.627.701-1.531.701-2.712 0-1.18-.233-2.084-.701-2.712-.468-.628-1.128-.942-1.98-.942-.863 0-1.53.314-1.997.941m4.594-2.1c.734.44 1.299 1.07 1.694 1.892.396.82.594 1.795.594 2.921 0 1.127-.198 2.1-.594 2.922-.395.82-.96 1.451-1.694 1.89-.735.44-1.6.66-2.598.66-.996 0-1.864-.22-2.604-.66-.74-.44-1.308-1.07-1.703-1.89-.396-.822-.594-1.796-.594-2.922 0-1.127.198-2.1.594-2.921.395-.821.963-1.451 1.703-1.892.74-.439 1.608-.66 2.604-.66.997 0 1.863.22 2.598.66m6.827 2.101c-.467.628-.701 1.532-.701 2.712 0 1.18.234 2.085.701 2.712.468.628 1.133.942 1.996.942.852 0 1.513-.314 1.98-.942.468-.627.702-1.531.702-2.712 0-1.18-.234-2.084-.702-2.712-.467-.628-1.128-.942-1.98-.942-.863 0-1.528.314-1.996.942m4.593-2.1c.735.44 1.3 1.07 1.695 1.89.396.822.594 1.796.594 2.922 0 1.127-.198 2.1-.594 2.922-.396.82-.96 1.451-1.695 1.89-.734.44-1.6.66-2.597.66-.997 0-1.865-.22-2.604-.66-.74-.44-1.308-1.07-1.704-1.89-.395-.821-.593-1.795-.593-2.922 0-1.127.198-2.1.593-2.921.396-.821.964-1.451 1.703-1.892.74-.44 1.609-.66 2.605-.66.997 0 1.862.22 2.597.66m8.007 5.264l-1.449 1.722v3.139h-2.127V65.19h2.127v5.039l4.177-5.039h2.466l-3.653 4.33 3.776 6.294h-2.435l-2.882-4.861zm9.016-3.976v2.688h4.331v1.803h-4.33v4.346h-2.128V65.19h7.614v1.786h-5.487zm11.544 4.603l-.956-2.993-.462-1.61h-.03l-.433 1.578-.986 3.026h2.867v-.001zm.524 1.643h-3.915l-.832 2.59h-2.174l3.715-10.622h2.543l3.715 10.623h-2.204l-.848-2.591zm13.3 2.59h-2.435l-3.56-6.244-.878-1.787h-.016l.062 1.883v6.148h-1.911V65.192h2.42l3.56 6.228.878 1.803h.031l-.061-1.883V65.19h1.91v10.624zm10.696-8.836h-3.406v8.837h-2.127v-8.837h-3.42v-1.786h8.953v1.786zm5.626 4.603l-.956-2.993-.462-1.61h-.03l-.432 1.578-.987 3.026h2.867v-.001zm.524 1.643h-3.915l-.832 2.59h-2.173l3.715-10.622h2.543l3.714 10.622h-2.204l-.847-2.59z"/>
            <g transform="translate(188.023 65)">
              <mask id="f" fill="#fff">
                <use xlink:href="#e"/>
              </mask>
              <path d="M7.183.52c.679.328 1.274.845 1.788 1.554L7.507 3.57c-.268-.58-.622-1.011-1.064-1.296-.441-.284-1.001-.427-1.68-.427-.616 0-1.091.121-1.425.362-.334.242-.501.562-.501.958 0 .366.17.655.509.87.339.215.95.402 1.833.563.925.183 1.66.409 2.205.676.544.269.942.604 1.194 1.006.251.402.378.904.378 1.505 0 .655-.178 1.221-.532 1.698-.354.478-.848.845-1.48 1.103-.631.258-1.353.386-2.165.386-1.12 0-2.038-.164-2.751-.491A4.087 4.087 0 01.294 8.994l1.264-1.577c.38.655.817 1.108 1.31 1.36.493.253 1.104.378 1.833.378.658 0 1.16-.107 1.504-.321.344-.216.516-.52.516-.918 0-.29-.162-.532-.486-.725-.323-.192-.901-.375-1.734-.547-.955-.203-1.718-.445-2.288-.724-.57-.279-.984-.622-1.24-1.03-.258-.408-.387-.912-.387-1.513 0-.633.165-1.204.494-1.714.329-.51.809-.91 1.44-1.2C3.154.174 3.896.03 4.749.03c.945 0 1.757.164 2.435.49" fill="#1D1D1B" fill-rule="nonzero" mask="url(#f)"/>
            </g>
            <path fill="#1D1D1B" fill-rule="nonzero" d="M206.719 66.977h-3.406v8.836h-2.127v-8.836h-3.422V65.19h8.955z"/>
            <g transform="translate(98 65)">
              <mask id="h" fill="#fff">
                <use xlink:href="#g"/>
              </mask>
              <path d="M110.46 10.813h2.127V.19h-2.126v10.623zm11.899-.619c-.761.52-1.67.78-2.728.78-.997 0-1.865-.22-2.605-.66-.74-.44-1.307-1.07-1.703-1.89-.396-.821-.594-1.795-.594-2.922 0-1.127.198-2.1.594-2.921.395-.821.96-1.452 1.695-1.891.735-.44 1.595-.66 2.582-.66 1.058 0 1.954.23 2.69.692.734.461 1.24 1.148 1.518 2.06l-1.927.853c-.165-.633-.421-1.089-.77-1.368-.35-.28-.823-.419-1.418-.419-.864 0-1.54.316-2.028.95-.488.633-.732 1.534-.732 2.704 0 1.17.237 2.071.71 2.704.472.633 1.14.95 2.003.95 1.243 0 2.024-.628 2.343-1.884l1.957.612c-.298 1.02-.827 1.79-1.587 2.31" fill="#1D1D1B" fill-rule="nonzero" mask="url(#h)"/>
            </g>
          </g>
        </g>
      </svg>
    </a>
    <div id="serachkaro">
      <div class="dropdown">
        <div id="serachkaro" class="dropbtn">
            <input id="serachnosarchiyo" type="text" placeholder="Search for a product or brand...">
            <button id="serchiyanubuuton"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div class="dropdown-content">
            <div id="serachdata"></div>
          </div>
        </div>
    </div>
    <div id="acc_cart">
        <div id="account">
            <div class="dropdown">
                <button class="dropbtn">
                    <i class="fa-regular fa-user"></i><span>Account</span>
                </button>
                <div class="dropdown-content">
                  <div id="mainacc">
                  <div id="lrmenu">
                    <button id="loginacc">Login</button>
                    <button>Singup</button>
                    </div>
                    <div id="otheracc">
                      <div>Wishlist</div>
                      <div>Your Orders</div>
                      <div>Your Referrals</div>
                    </div>
                  </div>
                </div>
              </div> 
            
        </div>
        <div id="cartmenus"></div>
        <div class="dropdown">
            <button id="svgcart" class="dropbtn">
                <svg  class="responsiveFlyoutBasket_icon responsiveFlyoutBasket_icon-basket" width="24" height="24" >
                    <path d="M6.57412994,10 L17.3932043,10 L13.37,4.18336196 L15.0021928,3 L19.8438952,10 L21,10 C21.5522847,10 22,10.4477153 22,11 C22,11.5522847 21.5522847,12 21,12 L17.5278769,19.8122769 C17.2068742,20.534533 16.4906313,21 15.7002538,21 L8.29974618,21 C7.50936875,21 6.79312576,20.534533 6.47212308,19.8122769 L3,12 C2.44771525,12 2,11.5522847 2,11 C2,10.4477153 2.44771525,10 3,10 L4.11632272,10 L9,3 L10.6274669,4.19016504 L6.57412994,10 Z M5.18999958,12 L8.29999924,19 L15.6962585,19 L18.8099995,12 L5.18999958,12 Z"></path>
                  </svg> <span>cart</span>
            </button>
            <div class="dropdown-content">
               <div id="cartcontent">There are currently no items in your cart.</div>
            </div>
          </div> 

    </div>
</div>
<hr style="height: 1.5px;background-color: black;">
<div id="bottomnav">
  <div>Brands</div>
  <div>The Holiday Edit</div>
  <div id="salariya">Sale
    <div class="mydrop" id="saledrop">
      <div><h2>$</h2><p>Sale</p></div>
      <div>Key Workers Discount</div>
      <div>Refer A Friend</div>
      <div><img src="https://s1.thcdn.com/navigation/121/2019/11/2918246-200-20191108.png" alt=""> <p>Clearance</p></div>
      <div><img src="https://s1.thcdn.com/navigation/121/2019/09/Webp.net-resizeimage_%284%29-20190927.jpg" alt=""> <p>Gift And Sets</p></div>
      <div><img src="https://s1.thcdn.com/navigation/121/2019/07/Coupon-20190718.jpg" alt=""><p>All Coupons</p></div>
      <div><img src="https://s1.thcdn.com/navigation/121/2019/08/Label-20190803-20190803.png" alt=""><p>Fetured Offers</p></div>
    </div>
  </div>
  <div>Skin Care</div>
  <div>Hair</div>
  <div>Makeup</div>
  <div>Bath & Body</div>
  <div>Fragrance</div>
  <div>Self Care</div>
  <div>Tools</div>
  <div>New & Trending</div>
  <div>Build a Routine</div>
  <div>Advice</div>
</div>`
}

export default navbar;