import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SvgIcon extends Component {
	getIcon = () => {
		const { name } = this.props;

		let result;

		switch ( name ) {
			case 'cancel':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'>
					<path d='M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z'/>
				</svg> );
				break;
			case 'global':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'>
					<path d='M433.562,100.983c-0.008-0.154-0.025-0.308-0.051-0.461c-0.597-0.853-1.331-1.587-1.946-2.423 c-4.46-6.076-9.182-11.924-14.165-17.545c-1.365-1.536-2.731-3.055-4.13-4.557c-5.131-5.495-10.513-10.735-16.145-15.718 c-1.041-0.922-2.014-1.877-3.055-2.782c-13.88-11.891-29.078-22.153-45.295-30.583c-0.649-0.341-1.331-0.631-1.997-0.973 c-7.222-3.67-14.627-6.969-22.187-9.882c-1.707-0.614-3.26-1.195-4.881-1.707c-6.724-2.423-13.551-4.545-20.48-6.366 c-2.048-0.546-4.096-1.109-6.178-1.587c-6.827-1.587-13.653-2.799-20.634-3.789c-2.116-0.307-4.198-0.717-6.332-0.973 c-17.979-2.185-36.156-2.185-54.136,0c-2.133,0.256-4.215,0.666-6.332,0.973c-6.98,0.99-13.875,2.202-20.634,3.789 c-2.082,0.478-4.13,1.041-6.178,1.587c-6.975,1.82-13.801,3.942-20.48,6.366c-1.707,0.58-3.26,1.161-4.881,1.707 c-7.559,2.913-14.965,6.211-22.187,9.882c-0.666,0.341-1.348,0.631-1.997,0.973c-16.271,8.421-31.52,18.682-45.449,30.583 c-1.041,0.904-2.014,1.86-3.055,2.782c-5.689,5.006-11.071,10.246-16.145,15.718c-1.399,1.502-2.765,3.021-4.13,4.557 c-4.995,5.609-9.717,11.457-14.165,17.544c-0.614,0.836-1.348,1.57-1.946,2.423c-0.078,0.149-0.147,0.303-0.205,0.461 c-58.866,82.497-58.866,193.267,0,275.763c0.058,0.158,0.126,0.312,0.205,0.461c0.597,0.853,1.331,1.587,1.946,2.423 c4.449,6.076,9.17,11.924,14.165,17.545c1.365,1.536,2.731,3.055,4.13,4.557c5.143,5.495,10.524,10.735,16.145,15.718 c1.041,0.922,2.014,1.877,3.055,2.782c13.88,11.891,29.078,22.153,45.295,30.583c0.649,0.341,1.331,0.631,1.997,0.973 c7.222,3.67,14.627,6.969,22.187,9.882c1.707,0.614,3.26,1.195,4.881,1.707c6.724,2.423,13.551,4.545,20.48,6.366 c2.048,0.546,4.096,1.109,6.178,1.587c6.827,1.587,13.653,2.799,20.634,3.789c2.116,0.307,4.198,0.717,6.332,0.973 c17.979,2.185,36.156,2.185,54.136,0c2.133-0.256,4.215-0.666,6.332-0.973c6.98-0.99,13.875-2.202,20.634-3.789 c2.082-0.478,4.13-1.041,6.178-1.587c6.986-1.82,13.813-3.942,20.48-6.366c1.707-0.58,3.26-1.161,4.881-1.707 c7.559-2.913,14.965-6.211,22.187-9.882c0.666-0.341,1.348-0.631,1.997-0.973c16.217-8.431,31.415-18.692,45.295-30.583 c1.041-0.905,2.014-1.86,3.055-2.782c5.689-4.995,11.071-10.234,16.145-15.718c1.399-1.502,2.765-3.021,4.13-4.557 c4.995-5.621,9.717-11.469,14.165-17.545c0.614-0.836,1.348-1.57,1.946-2.423c0.078-0.149,0.147-0.303,0.205-0.461 C492.428,294.25,492.428,183.48,433.562,100.983z M414.089,133.274c16.322,26.881,26.178,57.185,28.791,88.525H340.651 c-1.252-20.336-4.452-40.504-9.557-60.228C359.971,156.163,387.922,146.633,414.089,133.274z M282.368,38.775 c0.956,0.222,1.877,0.529,2.833,0.751c6.11,1.434,12.169,3.072,18.091,5.12c0.905,0.307,1.792,0.666,2.68,0.99 c5.871,2.048,11.656,4.318,17.323,6.827c0.99,0.461,1.963,0.973,2.953,1.434c5.427,2.583,10.729,5.376,15.906,8.38l3.413,2.065 c4.915,3.004,9.694,6.218,14.336,9.643c1.195,0.87,2.389,1.707,3.567,2.662c4.551,3.413,8.909,7.071,13.073,10.974 c1.092,0.99,2.219,1.963,3.294,2.987c4.369,4.147,8.533,8.533,12.561,13.073c0.512,0.597,1.058,1.143,1.57,1.707 c-23.109,11.013-47.59,18.877-72.789,23.381c-11.674-32.092-27.095-62.694-45.943-91.17 C277.606,38.025,280.03,38.264,282.368,38.775z M171.298,221.798c1.346-18.466,4.49-36.757,9.387-54.613 c19.337,2.297,38.793,3.436,58.266,3.413c19.491-0.006,38.965-1.174,58.317-3.499c4.888,17.885,8.015,36.205,9.335,54.699H171.298 z M306.603,255.932c-1.346,18.466-4.49,36.757-9.387,54.613c-19.337-2.297-38.793-3.436-58.266-3.413 c-19.49-0.022-38.963,1.117-58.317,3.413c-4.883-17.857-8.009-36.148-9.336-54.613H306.603z M238.95,45.193 c19.422,27.527,35.396,57.332,47.565,88.747c-15.799,1.678-31.676,2.521-47.565,2.526c-15.871-0.019-31.731-0.867-47.514-2.543 C203.62,102.529,219.575,72.734,238.95,45.193z M85.521,103.663c4.011-4.54,8.192-8.926,12.561-13.073 c1.075-1.024,2.202-1.997,3.294-2.987c4.21-3.834,8.568-7.492,13.073-10.974c1.178-0.905,2.372-1.707,3.567-2.662 c4.642-3.413,9.421-6.628,14.336-9.643l3.413-2.065c5.177-3.026,10.479-5.82,15.906-8.38c0.99-0.461,1.963-0.973,2.953-1.434 c5.666-2.56,11.452-4.83,17.323-6.827c0.887-0.324,1.707-0.683,2.679-0.99c5.922-1.98,11.947-3.618,18.091-5.12 c0.956-0.222,1.877-0.529,2.85-0.734c2.338-0.512,4.762-0.751,7.134-1.178c-18.856,28.481-34.282,59.089-45.961,91.187 c-25.199-4.504-49.681-12.368-72.789-23.381C84.463,104.806,85.009,104.26,85.521,103.663z M63.812,133.274 c26.161,13.358,54.106,22.888,82.978,28.297c-5.099,19.725-8.294,39.893-9.54,60.228H35.021 C37.635,190.459,47.491,160.155,63.812,133.274z M63.812,344.457c-16.322-26.881-26.178-57.185-28.791-88.525H137.25 c1.252,20.336,4.452,40.504,9.557,60.228C117.93,321.567,89.979,331.097,63.812,344.457z M195.533,438.955 c-0.956-0.222-1.877-0.529-2.833-0.751c-6.11-1.434-12.169-3.072-18.091-5.12c-0.905-0.307-1.792-0.666-2.68-0.99 c-5.871-2.048-11.656-4.318-17.323-6.827c-0.99-0.461-1.963-0.973-2.953-1.434c-5.427-2.583-10.729-5.376-15.906-8.38 l-3.413-2.065c-4.915-3.004-9.694-6.218-14.336-9.643c-1.195-0.87-2.389-1.707-3.567-2.662 c-4.551-3.413-8.909-7.071-13.073-10.974c-1.092-0.99-2.219-1.963-3.294-2.987c-4.369-4.147-8.533-8.533-12.561-13.073 c-0.512-0.597-1.058-1.143-1.57-1.707c23.109-11.013,47.59-18.877,72.789-23.381c11.674,32.092,27.095,62.694,45.943,91.17 C200.294,439.706,197.871,439.467,195.533,438.955z M238.95,432.538c-19.422-27.527-35.396-57.332-47.565-88.747 c31.607-3.402,63.488-3.402,95.095,0l-0.017,0.017C274.281,375.201,258.326,404.996,238.95,432.538z M392.38,374.067 c-4.011,4.54-8.192,8.926-12.561,13.073c-1.075,1.024-2.202,1.997-3.294,2.987c-4.21,3.846-8.568,7.504-13.073,10.974 c-1.178,0.904-2.372,1.792-3.567,2.662c-4.642,3.413-9.421,6.628-14.336,9.643l-3.413,2.065 c-5.166,3.015-10.468,5.808-15.906,8.38c-0.99,0.461-1.963,0.973-2.953,1.434c-5.666,2.56-11.452,4.83-17.323,6.827 c-0.887,0.324-1.707,0.683-2.679,0.99c-5.922,1.98-11.947,3.618-18.091,5.12c-0.956,0.222-1.877,0.529-2.85,0.734 c-2.338,0.512-4.762,0.751-7.134,1.178c18.848-28.476,34.27-59.078,45.943-91.17c25.199,4.504,49.681,12.368,72.789,23.381 C393.438,372.924,392.892,373.47,392.38,374.067z M414.089,344.457c-26.161-13.358-54.106-22.888-82.978-28.297 c5.099-19.725,8.294-39.893,9.54-60.228H442.88C440.266,287.271,430.41,317.575,414.089,344.457z'/>
				</svg> );
				break;
			case 'difficulty':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47 47' fill='currentcolor'>
					<path d='M29.289,18.798c-0.745-0.431-1.66-0.434-2.405-0.008l-9.158,5.233c-0.75,0.429-1.214,1.227-1.214,2.092v9.436 c0,1.331,1.079,2.41,2.41,2.41h9.158c1.331,0,2.41-1.079,2.41-2.41V20.883C30.489,20.024,30.031,19.229,29.289,18.798z'/>
					<path d='M12.899,28.164c-0.744-0.435-1.66-0.436-2.405-0.008l-9.279,5.303C0.266,34-0.2,35.113,0.081,36.169 c0.28,1.057,1.236,1.792,2.329,1.792h9.28c1.331,0,2.41-1.079,2.41-2.41v-5.304C14.101,29.39,13.643,28.594,12.899,28.164z'/>
					<path d='M45.799,9.364c-0.744-0.432-1.66-0.434-2.405-0.007l-9.279,5.302c-0.751,0.429-1.215,1.228-1.215,2.093v18.799 c0,1.331,1.079,2.41,2.41,2.41h9.279c1.331,0,2.41-1.079,2.41-2.41V11.449C47,10.59,46.542,9.795,45.799,9.364z'/>
				</svg> );
				break;
			case 'edit':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
					<path d='M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34'></path>
					<polygon points='18 2 22 6 12 16 8 16 8 12 18 2'></polygon>
				</svg> );
				break;
			case 'clock':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
					<circle cx='12' cy='12' r='10'></circle>
					<polyline points='12 6 12 12 16 14'></polyline>
				</svg> );
				break;
			case 'logo':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 135.467 135.467' width='32' height='32'>
					<metadata/>
					<path d='M 0,0 C 0.031,-0.09 0.06,-0.181 0.08,-0.272 0.06,-0.181 0.031,-0.09 0,0' transform='matrix(1.35546 0 0 -1.35065 31.028 34.444)' fill='currentColor'/>
					<path d='M 0,0 C 0.118,-0.123 0.224,-0.245 0.319,-0.367 0.224,-0.245 0.118,-0.123 0,0' transform='matrix(1.35546 0 0 -1.35065 29.96 32.807)' fill='currentColor'/>
					<path d='M 0,0 C 0.048,-0.09 0.095,-0.181 0.131,-0.272 0.095,-0.181 0.049,-0.09 0,0' transform='matrix(1.35546 0 0 -1.35065 30.803 33.936)' fill='currentColor'/>
					<path d='M 0,0 C -0.094,0.05 -0.188,0.107 -0.281,0.171 -0.188,0.107 -0.094,0.05 0,0' transform='matrix(1.35546 0 0 -1.35065 17.376 46.891)' fill='currentColor'/>
					<path d='M 0,0 C 0.067,-0.092 0.133,-0.185 0.188,-0.277 0.133,-0.185 0.068,-0.092 0,0' transform='matrix(1.35546 0 0 -1.35065 30.479 33.426)' fill='currentColor'/>
					<path d='M 0,0 C 0.113,-0.103 0.227,-0.193 0.34,-0.275 0.227,-0.193 0.113,-0.103 0,0' transform='matrix(1.35546 0 0 -1.35065 16.418 46.211)' fill='currentColor'/>
					<path d='M 0,0 C -0.072,0.131 -0.148,0.261 -0.217,0.392 -0.148,0.26 -0.072,0.131 0,0' transform='matrix(1.35546 0 0 -1.35065 42.71 70.535)' fill='currentColor'/>
					<path d='M 0,0 C 0.225,-0.223 0.454,-0.437 0.686,-0.648 0.454,-0.437 0.225,-0.223 0,0' transform='matrix(1.35546 0 0 -1.35065 48.021 77.53)' fill='currentColor'/>
					<path d='M 0,0 C 0.243,-0.204 0.475,-0.408 0.688,-0.613 0.474,-0.408 0.243,-0.204 0,0' transform='matrix(1.35546 0 0 -1.35065 67.36 60.749)' fill='currentColor'/>
					<path d='M 0,0 C 0.278,-0.2 0.536,-0.401 0.783,-0.602 0.535,-0.401 0.278,-0.2 0,0' transform='matrix(1.35546 0 0 -1.35065 66.105 59.776)' fill='currentColor'/>
					<path d='M 0,0 C -0.192,0.217 -0.399,0.434 -0.622,0.65 -0.399,0.434 -0.192,0.217 0,0' transform='matrix(1.35546 0 0 -1.35065 69.168 62.486)' fill='currentColor'/>
					<path d='M 0,0 C 0.198,-0.225 0.38,-0.45 0.546,-0.676 0.38,-0.45 0.198,-0.225 0,0' transform='matrix(1.35546 0 0 -1.35065 69.193 62.513)' fill='currentColor'/>
					<path d='M 0,0 C -0.139,0.15 -0.271,0.307 -0.406,0.46 -0.271,0.306 -0.139,0.15 0,0' transform='matrix(1.35546 0 0 -1.35065 47.12 76.611)' fill='currentColor'/>
					<path d='M 0,0 C -0.117,0.16 -0.23,0.322 -0.343,0.484 -0.23,0.321 -0.117,0.16 0,0' transform='matrix(1.35546 0 0 -1.35065 44.764 73.75)' fill='currentColor'/>
					<path d='M 0,0 C -0.099,0.154 -0.197,0.308 -0.292,0.463 -0.197,0.307 -0.099,0.154 0,0' transform='matrix(1.35546 0 0 -1.35065 43.7 72.196)' fill='currentColor'/>
					<path strokeWidth='1.353' d='m 36.587423,76.426383 c 0.637065,-1.092677 1.358169,-2.173198 2.153822,-3.233459 2.439824,4.27346 5.953171,8.245726 9.791828,10.988898 3.616361,2.585147 7.234078,3.895278 10.754202,3.895278 5.119564,0 9.79996,-2.743172 13.536957,-7.932374 2.916945,-4.051954 4.254782,-8.279492 3.871187,-12.224744 -0.447301,-4.571955 -3.076889,-8.6077 -7.816925,-11.996484 -0.783454,-0.55917 -1.607573,-1.084573 -2.462867,-1.580262 9.061236,-3.827746 14.748737,-5.536319 22.553463,-5.536319 8.683062,0 16.15841,2.88364 19.91981,5.35263 8.38621,5.506605 8.89316,14.801787 6.57126,21.665796 -3.70718,10.959184 -12.22352,20.217898 -18.595529,20.217898 H 38.009298 c -0.855294,-0.302546 -3.586541,-1.476262 -4.806453,-4.470655 -1.463895,-3.596785 -0.294134,-8.83461 3.384578,-15.146203 m 4.622111,-18.879402 c 1.470672,-2.043536 4.4703,-3.168628 8.445858,-3.168628 5.405565,0 11.862966,2.119172 16.449836,5.397202 8.472966,6.057671 6.228328,12.917628 2.853238,17.605738 -1.955925,2.71616 -5.221223,5.955022 -9.671191,5.955022 -2.504886,0 -5.190048,-1.011638 -7.980936,-3.00655 C 47.28063,77.452878 43.666979,72.99708 41.64057,68.411619 39.645336,63.897742 39.488103,59.937633 41.209534,57.546981 M 35.138439,31.945387 c 0.538116,-0.235013 1.122319,-0.361974 1.726853,-0.361974 h 0.01355 c 1.107409,0.0041 2.134846,0.430857 2.892547,1.206131 2.42627,2.477094 0.894603,5.006864 -0.817341,6.692477 -0.452723,0.444364 -0.707549,1.052157 -0.707549,1.686963 0,0.633455 0.254826,1.241249 0.707549,1.685613 l 7.173083,7.057152 c -0.824118,0.132364 -1.61435,0.312001 -2.361207,0.537559 l -9.751164,-9.41674 c 1.819024,-2.563536 2.738025,-5.86993 1.123675,-9.087181 m -8.783367,13.48085 c -1.427297,-1.122391 -2.850528,-0.152624 -3.459128,0.262026 -2.419492,1.650496 -4.447257,2.370393 -6.477733,0.522702 -0.753635,-0.68478 -1.181959,-1.649145 -1.206358,-2.71616 -0.02575,-1.18317 0.44188,-2.343379 1.283619,-3.182134 0.954242,-0.950858 2.270392,-1.385768 3.608229,-1.192625 0.742791,0.106702 1.492359,-0.141818 2.022343,-0.669923 0.531339,-0.529455 0.780743,-1.276365 0.672307,-2.015171 -0.192475,-1.334444 0.243982,-2.645926 1.198224,-3.596785 0.822763,-0.819845 1.920684,-1.253404 3.078245,-1.254754 1.107409,0.01081 2.132135,0.444364 2.884414,1.223689 1.234822,1.276366 1.538445,2.505458 0.984063,3.987123 -0.482543,1.288521 -1.45034,2.317717 -1.843423,2.699952 -0.460856,0.447065 -0.719748,1.060261 -0.718393,1.700469 0,0.640209 0.261604,1.253405 0.722459,1.69912 l 10.195754,9.846247 c -0.748213,0.599689 -1.406965,1.280417 -1.955926,2.042185 -0.218228,0.302545 -0.412059,0.619948 -0.596401,0.942754 L 26.559746,45.607224 c -0.06506,-0.06348 -0.132835,-0.12426 -0.204674,-0.180987 M 118.94504,103.40969 H 19.707907 c -0.72517,0 -1.31615,-0.58888 -1.31615,-1.31283 0,-0.72395 0.59098,-1.31283 1.31615,-1.31283 h 99.237133 c 0.72517,0 1.31615,0.58888 1.31615,1.31283 0,0.72395 -0.59098,1.31283 -1.31615,1.31283 m 0,-7.366449 h -11.19337 c 5.32017,-4.530084 9.84469,-11.689886 12.21674,-18.703818 3.62992,-10.728222 0.30769,-21.380808 -8.46212,-27.138634 -4.51774,-2.96603 -12.810435,-6.134658 -22.5372,-6.134658 -9.706434,0 -16.527097,2.437925 -28.339912,7.605517 -2.564526,-0.918443 -5.22529,-1.5546 -7.81557,-1.84499 l -8.955509,-8.808947 c 2.275813,-3.234809 3.135174,-7.641984 -0.681796,-11.539964 -1.656369,-1.692366 -3.888808,-2.628367 -6.283902,-2.63512 h -0.02575 c -1.753962,0 -3.475393,0.521351 -4.935222,1.464106 -1.40832,-0.936002 -3.06469,-1.447898 -4.811875,-1.464106 -0.02846,0 -0.05557,0 -0.08268,0 -2.385605,0 -4.715637,0.960313 -6.404538,2.643224 -1.356813,1.352002 -2.229728,3.102446 -2.523862,4.959591 -1.863755,0.291741 -3.620428,1.162911 -4.977241,2.514913 -1.756674,1.750444 -2.731248,4.170811 -2.675674,6.642503 0.05422,2.373094 1.031503,4.54224 2.752935,6.108995 3.209724,2.921458 7.010428,3.109199 11.312651,0.565923 l 10.758268,10.683651 c -0.120636,2.266392 0.288713,4.766448 1.2294,7.415075 -1.546577,1.82473 -2.90339,3.726447 -4.035197,5.668683 -4.535362,7.783803 -5.760696,14.310149 -3.642116,19.398052 0.410704,0.988677 0.923067,1.849042 1.485582,2.600004 H 19.707907 c -3.349336,0 -6.075162,2.71616 -6.075162,6.053619 0,3.33881 2.725826,6.05362 6.075162,6.05362 h 99.237133 c 3.34934,0 6.07516,-2.71481 6.07516,-6.05362 0,-3.337459 -2.72582,-6.053619 -6.07516,-6.053619'/>
					<path d='M 0,0 C -0.13,0.158 -0.256,0.321 -0.382,0.483 -0.256,0.321 -0.131,0.159 0,0' transform='matrix(1.35546 0 0 -1.35065 45.906 75.222)' fill='currentColor'/>
					<path d='M 0,0 C -0.034,0.054 -0.067,0.108 -0.099,0.164 -0.067,0.108 -0.034,0.054 0,0' transform='matrix(1.35546 0 0 -1.35065 33.806 92.726)' fill='currentColor'/>
					<path d='M 0,0 C -0.113,0.117 -0.226,0.235 -0.346,0.35 -0.226,0.235 -0.113,0.117 0,0' transform='matrix(1.35546 0 0 -1.35065 111.97 56.71)' fill='currentColor'/>
					<path d='M 0,0 C 0.112,-0.089 0.215,-0.184 0.322,-0.275 0.214,-0.184 0.113,-0.089 0,0' transform='matrix(1.35546 0 0 -1.35065 110.274 55.165)' fill='currentColor'/>
					<path d='M 0,0 C -0.013,0.016 -0.024,0.034 -0.037,0.049 -0.024,0.034 -0.013,0.016 0,0' transform='matrix(1.35546 0 0 -1.35065 34.36 93.505)' fill='currentColor'/>
					<path d='M 0,0 C 0.111,-0.128 0.219,-0.258 0.324,-0.389 0.219,-0.258 0.111,-0.128 0,0' transform='matrix(1.35546 0 0 -1.35065 112.582 57.371)' fill='currentColor'/>
					<path d='M 0,0 C -0.026,0.019 -0.052,0.043 -0.078,0.063 -0.052,0.042 -0.026,0.02 0,0' transform='matrix(1.35546 0 0 -1.35065 35.772 94.837)' fill='currentColor'/>
					<path d='M 0,0 C -0.194,0.15 -0.393,0.299 -0.598,0.446 -0.393,0.299 -0.194,0.15 0,0' transform='matrix(1.35546 0 0 -1.35065 69.689 56.527)' fill='currentColor'/>
					<path d='M 0,0 C -0.089,0.132 -0.181,0.262 -0.268,0.395 -0.181,0.262 -0.09,0.132 0,0' transform='matrix(1.35546 0 0 -1.35065 40.233 75.553)' fill='currentColor'/>
					<path d='M 0,0 C 0.042,-0.041 0.083,-0.079 0.126,-0.117 0.084,-0.079 0.042,-0.04 0,0' transform='matrix(1.35546 0 0 -1.35065 34.968 94.152)' fill='currentColor'/>
					<path d='M 0,0 C -0.045,0.026 -0.09,0.053 -0.136,0.082 -0.089,0.053 -0.045,0.027 0,0' transform='matrix(1.35546 0 0 -1.35065 36.552 95.35)' fill='currentColor'/>
					<path d='M 0,0 C 0.461,0 0.915,0.187 1.24,0.513 1.568,0.84 1.755,1.292 1.755,1.755 1.755,2.216 1.568,2.668 1.24,2.995 0.915,3.321 0.461,3.508 0,3.508 -0.463,3.508 -0.915,3.321 -1.24,2.995 -1.568,2.668 -1.755,2.216 -1.755,1.755 -1.755,1.292 -1.568,0.84 -1.24,0.513 -0.915,0.187 -0.463,0 0,0' transform='matrix(1.35546 0 0 -1.35065 94.938 84.293)'/>
					<path d='M 0,0 C 0.461,0 0.915,0.187 1.24,0.515 1.568,0.84 1.755,1.294 1.755,1.755 1.755,2.216 1.568,2.67 1.24,2.995 0.915,3.323 0.463,3.51 0,3.51 -0.461,3.51 -0.915,3.323 -1.24,2.995 -1.568,2.67 -1.755,2.216 -1.755,1.755 -1.755,1.294 -1.568,0.84 -1.24,0.515 -0.913,0.187 -0.461,0 0,0' transform='matrix(1.35546 0 0 -1.35065 104.547 82.592)'/>
					<path d='M 0,0 C 0.461,0 0.915,0.187 1.24,0.515 1.568,0.84 1.755,1.292 1.755,1.755 1.755,2.219 1.568,2.67 1.24,2.995 0.915,3.323 0.461,3.51 0,3.51 -0.461,3.51 -0.915,3.323 -1.241,2.995 -1.568,2.67 -1.755,2.219 -1.755,1.755 -1.755,1.292 -1.568,0.84 -1.241,0.515 -0.915,0.187 -0.461,0 0,0' transform='matrix(1.35546 0 0 -1.35065 98.63 77.273)'/>
				</svg> );
				break;
			case 'sidebar':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
					<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
					<line x1='9' y1='3' x2='9' y2='21'></line>
				</svg> );
				break;
			case 'minimize':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
					<rect x='1' y='24' width='48' height='2'/>
				</svg> );
				break;
			case 'close':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
					<path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M368 368L144 144'/>
					<path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M368 144L144 368'/>
				</svg> );
				break;
			case 'maximize':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
					<path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M416 448H96a32.09 32.09 0 01-32-32V96a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v320a32.09 32.09 0 01-32 32z'/>
				</svg> );
				break;
			case 'maximized':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448'>
					<rect width='336' height='336' x='16' y='96' fill='none' strokeLinejoin='round' strokeWidth='32' rx='57' ry='57'/>
					<path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M352 352h24a56.16 56.16 0 0056-56V80a64.19 64.19 0 00-64-64H152a56.16 56.16 0 00-56 56l.5 24'/>
				</svg> );
				break;
			case 'settings':
				result = ( <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor'>
					<path d='M16,12a4,4,0,1,0,4,4A4,4,0,0,0,16,12Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,16,18Z'/>
					<path d='M27.57,18.3l-1.38-.79a9.56,9.56,0,0,0,0-3l1.38-.79a2.86,2.86,0,0,0,1.05-3.91l-.93-1.61a2.88,2.88,0,0,0-3.91-1l-1.38.8a10.07,10.07,0,0,0-2.61-1.52V4.83A2.86,2.86,0,0,0,16.93,2H15.07a2.86,2.86,0,0,0-2.86,2.86V6.41A10.07,10.07,0,0,0,9.6,7.93l-1.38-.8a2.86,2.86,0,0,0-3.91,1L3.38,9.79a2.88,2.88,0,0,0,1,3.91l1.38.79a9.56,9.56,0,0,0,0,3l-1.38.79a2.86,2.86,0,0,0-1,3.91l.93,1.61a2.88,2.88,0,0,0,3.91,1.05l1.38-.8a10.07,10.07,0,0,0,2.61,1.52v1.58A2.86,2.86,0,0,0,15.07,30h1.86a2.86,2.86,0,0,0,2.86-2.86V25.59a10.07,10.07,0,0,0,2.61-1.52l1.38.8a2.86,2.86,0,0,0,3.91-1.05l.93-1.61A2.88,2.88,0,0,0,27.57,18.3Zm-.69,2.91L26,22.82a.86.86,0,0,1-1.17.32l-2.63-1.52-.54.49a8.3,8.3,0,0,1-3.12,1.82l-.7.22v3a.86.86,0,0,1-.86.86H15.07a.86.86,0,0,1-.86-.86v-3l-.7-.22a8.3,8.3,0,0,1-3.12-1.82l-.54-.49L7.22,23.14a.87.87,0,0,1-.65.08.84.84,0,0,1-.52-.4l-.93-1.61A.86.86,0,0,1,5.43,20l2.62-1.51-.16-.72a8.56,8.56,0,0,1-.2-1.8,8,8,0,0,1,.21-1.8l.15-.72L5.43,12a.86.86,0,0,1-.31-1.18l.93-1.61a.86.86,0,0,1,1.17-.32l2.63,1.52.54-.49a8.3,8.3,0,0,1,3.12-1.82l.7-.22v-3A.86.86,0,0,1,15.07,4h1.86a.86.86,0,0,1,.86.86v3l.7.22a8.3,8.3,0,0,1,3.12,1.82l.54.49,2.63-1.52a.87.87,0,0,1,.65-.08.84.84,0,0,1,.52.4l.93,1.61A.86.86,0,0,1,26.57,12L24,13.48l.16.72a8.56,8.56,0,0,1,.2,1.8,8,8,0,0,1-.21,1.8l-.15.72L26.57,20A.86.86,0,0,1,26.88,21.21Z'/>
				</svg> );
				break;
			case 'print':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'>
					<path d='M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z'/>
				</svg> );
				break;
			case 'star':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
					<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
				</svg> );
				break;
			case 'bookmark':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
					<path d='M317.379,0H97.951C83.322,0,71.828,11.494,71.828,26.122v373.029c0,5.747,3.135,10.971,7.837,13.584 c2.612,1.567,5.224,2.09,7.837,2.09s5.747-0.522,8.359-2.09l111.804-69.486l111.804,68.441c4.702,3.135,10.971,3.135,15.673,0.522 c4.702-2.612,7.837-7.837,7.837-13.584V26.122C343.502,11.494,332.008,0,317.379,0z'/>
				</svg> );
				break;
			case 'bookmark_outline':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
					<path d='M391.416,0H120.584c-17.778,0-32.242,14.464-32.242,32.242v460.413c0,7.016,3.798,13.477,9.924,16.895 c2.934,1.638,6.178,2.45,9.421,2.45c3.534,0,7.055-0.961,10.169-2.882l138.182-85.312l138.163,84.693 c5.971,3.669,13.458,3.817,19.564,0.387c6.107-3.418,9.892-9.872,9.892-16.875V32.242C423.657,14.464,409.194,0,391.416,0z M384.967,457.453l-118.85-72.86c-6.229-3.817-14.07-3.798-20.28,0.032l-118.805,73.35V38.69h257.935V457.453z'/>
				</svg> );
				break;
			case 'restore':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
					<path d='M32 464a48 48 0 0048 48h288a48 48 0 0048-48V128H32zm91.31-172.8l89.38-94.26a15.41 15.41 0 0122.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 01-16 16h-32a16 16 0 01-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z'/>
				</svg> );
				break;
			case 'save':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 448 512'>
					<path d='M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z'/>
				</svg> );
				break;
			case 'trash':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='trash'>
					<polyline points='3 6 5 6 21 6'></polyline>
					<path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
				</svg> );
				break;
			case 'inbox':
				result = ( <svg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path d='m511.988 159.494c-.516-39.577-17.999-78.647-49.228-110.012-31.771-31.909-71.358-49.482-111.47-49.482-42.028 0-82.991 18.831-118.46 54.456-36.572 36.731-63.456 86.855-73.76 137.519-5.29 26.011-5.843 50.385-1.644 72.446 1.084 5.694 2.473 11.168 4.164 16.413l-81.044 81.205c-20.733-11.173-47.284-8-64.623 9.408-21.258 21.338-21.225 56.09.073 77.47 8.588 8.62 19.591 13.997 31.271 15.603 1.59 11.714 6.941 22.754 15.526 31.371 10.348 10.388 24.105 16.109 38.735 16.109 14.592 0 28.301-5.695 38.604-16.037 16.927-16.992 20.447-42.619 10.173-63.22l81.088-81.24c14.363 4.803 30.356 7.266 47.65 7.266 61.095-.001 131.265-30.829 178.767-78.54 36.002-36.161 54.736-77.91 54.178-120.735zm-401.528 270.701 9.358 10.559c8.703 9.82 8.289 24.771-.941 34.037-4.632 4.648-10.793 7.209-17.349 7.209-6.595 0-12.803-2.586-17.481-7.281-5.888-5.91-8.425-14.337-6.788-22.542l4.405-22.078-22.073 4.438c-8.123 1.64-16.476-.905-22.342-6.792-9.667-9.704-9.7-25.461-.072-35.125 9.423-9.461 24.913-9.555 34.528-.209l10.616 10.318 93.011-93.195c3.763 5.62 8.027 10.828 12.785 15.606 4.552 4.572 9.517 8.696 14.863 12.361zm326.088-171.132c-20.673 20.764-46.626 38.344-75.054 50.837-28.087 12.344-56.598 18.869-82.451 18.869-20.518 0-49.26-4.302-69.664-24.795-22.413-22.511-30.034-61.153-20.908-106.021 9.03-44.399 33.562-90.131 65.622-122.331 29.714-29.846 63.325-45.622 97.198-45.622 32.073 0 64.109 14.436 90.208 40.648 26.069 26.183 40.07 57.04 40.49 89.237.451 34.572-15.263 68.867-45.441 99.178z'/><path d='m318.385 78.869h29.891v30h-29.891z'/><path d='m397.123 118.782h29.891v30h-29.891z'/><path d='m226.013 201.711h29.89v30h-29.89z'/>
				</svg> );
				break;
			case 'ingredients':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='currentColor'>
					<path d='M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z'/>
				</svg> );
				break;
			case 'ghost':
				result = ( <svg viewBox='-46 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path d='m209.757812 0c-115.660156 0-209.757812 94.097656-209.757812 209.757812v302.023438l48.007812-32.25 32.433594 22.191406 32.652344-22.140625 32.175781 22.222657 32.152344-22.207032 32.476563 22.117188 32.597656-22.152344 32.394531 22.167969 32.582031-22.140625 32.140625 22.199218 32.304688-22.203124 47.597656 32.414062v-302.242188c0-115.660156-94.097656-209.757812-209.757813-209.757812zm179.574219 454.925781-17.492187-11.914062-32.1875 22.125-32.042969-22.132813-32.660156 22.191406-32.394531-22.164062-32.636719 22.179688-32.613281-22.214844-32.035157 22.125-32.015625-22.109375-32.734375 22.191406-32.359375-22.140625-17.980468 12.082031v-245.386719c0-99.019531 80.558593-179.574218 179.578124-179.574218 99.015626 0 179.574219 80.554687 179.574219 179.574218zm0 0'/>
					<path d='m132.167969 152.40625c-30.328125 0-55 24.671875-55 55 0 30.324219 24.671875 54.996094 55 54.996094 30.324219 0 54.996093-24.671875 54.996093-54.996094 0-30.328125-24.671874-55-54.996093-55zm0 79.816406c-13.683594 0-24.816407-11.132812-24.816407-24.816406s11.132813-24.816406 24.816407-24.816406c13.683593 0 24.816406 11.132812 24.816406 24.816406s-11.132813 24.816406-24.816406 24.816406zm0 0'/>
					<path d='m287.347656 152.40625c-30.328125 0-55 24.671875-55 55 0 30.324219 24.671875 54.996094 55 54.996094s55-24.671875 55-54.996094c0-30.328125-24.671875-55-55-55zm0 79.816406c-13.683594 0-24.816406-11.132812-24.816406-24.816406s11.132812-24.816406 24.816406-24.816406 24.816406 11.132812 24.816406 24.816406-11.132812 24.816406-24.816406 24.816406zm0 0'/>
				</svg> );
				break;
			case 'tag':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 503.163 503.163' fill='currentColor'>
					<path d='M471.163,0.019H309.328c-8.427,0-16.683,3.413-22.635,9.365L9.36,286.717c-12.48,12.48-12.48,32.768,0,45.248 L171.195,493.8c6.229,6.229,14.443,9.344,22.635,9.344c8.171,0,16.384-3.115,22.635-9.323l277.333-277.333 c6.037-6.059,9.365-14.101,9.365-22.635V32.019C503.163,14.376,488.805,0.019,471.163,0.019z M481.808,193.832 c0,2.816-1.131,5.568-3.115,7.552L201.36,478.717c-4.16,4.16-10.923,4.16-15.083,0L24.443,316.883 c-4.16-4.16-4.16-10.923,0-15.083L301.776,24.467c1.984-1.984,4.736-3.115,7.552-3.115h161.813 c5.867,0,10.667,4.779,10.667,10.667V193.832z'/>
					<path d='M385.829,64.019c-29.419,0-53.333,23.936-53.333,53.333s23.915,53.333,53.333,53.333 c29.419,0,53.333-23.936,53.333-53.333S415.248,64.019,385.829,64.019z M385.829,149.352c-17.643,0-32-14.357-32-32 c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32C417.829,134.995,403.472,149.352,385.829,149.352z'/>
				</svg> );
				break;
			case 'search':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fillRule='evenodd'>
					<path d='M15.55 13.43l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'/>
				</svg> );
				break;
			case 'concierge':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'>
					<path d='M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46zM496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z'/>
				</svg> );
				break;
			case 'minus':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
					<path fill='currentColor' d='M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' />
				</svg> );
				break;
			case 'plus':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
					<path d='M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' />
				</svg> );
				break;
			case 'meal':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'>
					<path d='M498.682,435.326L297.917,234.56L63.357,0H45.026l-3.743,9.511c-9.879,25.104-14.1,50.78-12.205,74.249 c2.16,26.752,12.323,49.913,29.392,66.982L241.58,333.852l24.152-24.152l169.285,189.293c16.84,16.84,45.825,17.84,63.665,0 C516.236,481.439,516.236,452.879,498.682,435.326z'/>
					<path d='M156.728,291.442L13.317,434.853c-17.552,17.552-17.552,46.113,0,63.665c16.674,16.674,45.519,18.146,63.665,0 l143.412-143.412L156.728,291.442z'/>
					<path d='M490.253,85.249l-81.351,81.35l-21.223-21.222l81.351-81.351l-21.222-21.222l-81.35,81.35l-21.222-21.222l81.351-81.35 L405.366,0.361L299.256,106.471c-12.981,12.981-20.732,30.217-21.828,48.535c-0.277,4.641-1.329,9.206-3.074,13.548l68.929,68.929 c4.342-1.747,8.908-2.798,13.548-3.075c18.318-1.093,35.554-8.846,48.535-21.827l106.11-106.109L490.253,85.249z'/>
				</svg> );
				break;
			case 'upload':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
					<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
					<polyline points='17 8 12 3 7 8'></polyline>
					<line x1='12' y1='3' x2='12' y2='15'></line>
				</svg> );
				break;
			case 'servings':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' fill='currentColor'>
					<path d='M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z'/>
				</svg> );
				break;
			case 'grid':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 489 489' fill='currentcolor'>
					<path d='M209.1,259.1H20.8C9.4,259.1,0,268.5,0,279.9v188.3C0,479.6,9.4,489,20.8,489h188.3c11.4,0,19.8-9.4,20.8-20.8V279.9 C229.9,268.4,220.6,259.1,209.1,259.1z M188.3,448.4H40.6V300.7h147.7L188.3,448.4L188.3,448.4z'/>
					<path d='M209.1,0H20.8C9.4,0,0,9.4,0,20.8v187.3c0,11.4,9.4,20.8,20.8,20.8h188.3c11.4,0,19.8-8.3,20.8-19.8V20.8 C229.9,9.4,220.6,0,209.1,0z M188.3,188.3H40.6V40.6h147.7L188.3,188.3L188.3,188.3z'/>
					<path d='M468.2,0H279.9c-11.4,0-20.8,9.4-20.8,20.8v187.3c0,11.4,9.4,20.8,20.8,20.8h188.3c11.4,0,20.8-8.3,20.8-19.8V20.8 C489,9.4,479.6,0,468.2,0z M448.4,188.3H300.7V40.6h147.7L448.4,188.3L448.4,188.3z'/>
					<path d='M468.2,259.1H279.9c-11.4,0-20.8,9.4-20.8,20.8v188.3c0,11.4,9.4,20.8,20.8,20.8h188.3c11.4,0,20.8-9.4,20.8-20.8V279.9 C489,268.4,479.6,259.1,468.2,259.1z M448.4,448.4H300.7V300.7h147.7L448.4,448.4L448.4,448.4z'/>
				</svg> );
				break;
			case 'simplelist':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 490 490' fill='currentColor'>
					<path d='M68.1,0H21.3C9.9,0,0.5,9.4,0.5,20.8s9.4,20.8,20.8,20.8h46.8c11.4,0,20.8-9.4,20.8-20.8C88.9,9.4,79.6,0,68.1,0z'/>
					<path d='M184.7,41.6h284c11.4,0,20.8-9.4,20.8-20.8S480.1,0,468.7,0h-284c-11.4,0-20.8,9.4-20.8,20.8 C163.9,32.3,173.2,41.6,184.7,41.6z'/>
					<path d='M68.1,149.8H21.3c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h46.8c11.4,0,20.8-9.4,20.8-20.8S79.6,149.8,68.1,149.8z'/>
					<path d='M468.7,149.8h-284c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h284c11.4,0,20.8-9.4,20.8-20.8S480.1,149.8,468.7,149.8z'/>
					<path d='M68.1,298.6H21.3c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h46.8c11.4,0,20.8-8.3,20.8-20.8 C88.9,307.9,79.6,298.6,68.1,298.6z'/>
					<path d='M468.7,298.6h-284c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h284c11.4,0,20.8-8.3,20.8-20.8 C489.5,307.9,480.1,298.6,468.7,298.6z'/>
					<path d='M68.1,448.4H21.3c-11.4,0-20.8,9.4-20.8,20.8S9.9,490,21.3,490h46.8c11.4,0,20.8-9.4,20.8-20.8S79.6,448.4,68.1,448.4z'/>
					<path d='M468.7,448.4h-284c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h284c11.4,0,20.8-9.4,20.8-20.8S480.1,448.4,468.7,448.4z'/>
				</svg> );
				break;
			case 'imglist':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 489 489' fill='currentColor'>
					<path d='M166.55,0H20.85C9.45,0,0.05,9.4,0.05,20.8v146.7c0,11.4,9.4,20.8,20.8,20.8h145.7c11.4,0,19.8-9.4,20.8-19.8V20.8 C187.35,9.4,177.95,0,166.55,0z M145.75,147.7H40.65V40.6h105.1V147.7z'/>
					<path d='M273.65,61.4h194.5c11.4,0,20.8-9.4,20.8-20.8s-9.4-20.8-20.8-20.8h-194.5c-11.4,0-20.8,9.4-20.8,20.8 C252.85,52,262.25,61.4,273.65,61.4z'/>
					<path d='M468.25,125.9h-194.6c-11.4,0-20.8,9.4-20.8,20.8c0,11.4,9.4,20.8,20.8,20.8h194.5c11.4,0,20.8-9.4,20.8-20.8 C489.05,135.3,479.65,125.9,468.25,125.9z'/>
					<path d='M166.55,300.7H20.85c-11.4,0-20.8,9.4-20.8,20.8v146.7c0,11.4,9.4,20.8,20.8,20.8h145.7c11.4,0,19.8-9.4,20.8-19.8V321.5 C187.35,310,177.95,300.7,166.55,300.7z M145.75,448.4H40.65V341.3h105.1V448.4z'/>
					<path d='M468.25,320.4h-194.6c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h194.5c11.4,0,20.8-9.4,20.8-20.8 C489.05,329.8,479.65,320.4,468.25,320.4z'/>
					<path d='M468.25,426.6h-194.6c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h194.5c11.4,0,20.8-9.4,20.8-20.8 C489.05,435.9,479.65,426.6,468.25,426.6z'/>
				</svg> );
				break;
			case 'toque':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='currentColor' color='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
					<path d='M22.4,8.1C22.7,8,23.1,8,23.5,8c3,0,5.5,2.5,5.5,5.5S26.5,19,23.5,19l0.5,9H8l0.5-9c-3,0-5.5-2.5-5.5-5.5 S5.5,8,8.5,8c0.4,0,0.8,0,1.1,0.1'/>
					<path d='M23,11c0-3.9-3.1-7-7-7s-7,3.1-7,7'/>
					<line x1='16' y1='21' x2='16' y2='24'/>
					<line x1='12.5' y1='21' x2='12' y2='23.7'/>
					<line x1='19.5' y1='21' x2='20' y2='23.7'/>
				</svg> );
				break;
			case 'x_circle':
				result = ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
					<circle cx='12' cy='12' r='10'></circle>
					<line x1='15' y1='9' x2='9' y2='15'></line>
					<line x1='9' y1='9' x2='15' y2='15'></line>
				</svg> );
				break;
			default:
				result = ( <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 32 32' fill='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10'>
					<circle cx='22' cy='22' r='7'/>
					<path d='M22,19c1,0,1.9,0.5,2.5,1.3'/>
					<circle cx='9' cy='9' r='4'/>
					<circle cx='5.5' cy='21.5' r='3.5'/>
					<line x1='19' y1='3' x2='19' y2='6'/>
					<line x1='26' y1='10' x2='23' y2='10'/>
					<line x1='23.9' y1='5.1' x2='21.8' y2='7.2'/>
				</svg> );
		}

		return result;
	};

	render() {
		return this.getIcon();
	}
}

SvgIcon.propTypes = {
	name: PropTypes.oneOf( [
		'bookmark',
		'bookmark_outline',
		'cancel',
		'clock',
		'close',
		'concierge',
		'difficulty',
		'edit',
		'ghost',
		'global',
		'grid',
		'imglist',
		'inbox',
		'ingredients',
		'logo',
		'minimize',
		'maximize',
		'maximized',
		'meal',
		'minus',
		'plus',
		'print',
		'restore',
		'save',
		'search',
		'servings',
		'settings',
		'sidebar',
		'simplelist',
		'star',
		'tag',
		'toque',
		'trash',
		'x_circle',
		'upload'
	] ).isRequired
};

export default SvgIcon;
