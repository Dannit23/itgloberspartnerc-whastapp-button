import React from 'react'
import PropTypes from 'prop-types'

// Declara un tipo de propiedades
type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

// Define the functional component
const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} width={width} height={height} alt="Whatsapp Logo" />
        </a>
      </div>
    </>
  )
}

// Declara el tipo de propiedades del whatsapp
WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'undefined',
  phone: '3208698580',
  message: 'Hello, welcome to TechInn store. How can we help you',
  width: 80,
  height: 80,
}

//propiedades a usar por el administrador
WhatsappButton.schema = {
  title: 'Whatsapp Button',
  type: 'object',
  properties: {
    logo: {
      title: 'Whatsapp logo',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Sales support whatsapp phone',
      description: "Please add the phone number",
      type: 'string',
    },
    message: {
      title: 'Message sent to client',
      description: "Please add the message to be seen for your client",
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Width',
      type: 'number',
    },
    height: {
      title: 'Height',
      type: 'number',
    },
  },
}
export default WhatsappButton