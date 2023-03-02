function shadowizard(options) {

    let images = document.querySelectorAll('.shadowizard');

    if(options.shadow_type == 'hard'){

        options.shadow_type = '0px'

    }else{

        options.shadow_type = '15px'

    }

    images.forEach(image =>{

        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding){

            image.style.padding = '1em'; // Added missing '=' operator

        }

        if(options.border){

            image.style.border = '1px solid black';

        }

        if(options.border_radius){

            image.style.borderRadius = '50%';

        }

        if(options.width){

            image.style.width = options.width;

        }

        if(options.height){

            image.style.height = options.height;

        }

        if(options.background_color){

            if(options.gradient){

                image.style.background = `linear-gradient(${options.gradient_direction}, ${options.background_color}, ${options.gradient_color})`;

            } else {

                image.style.backgroundColor = options.background_color;

            }

        }

    })

}

module.exports.shadowizard = shadowizard;
