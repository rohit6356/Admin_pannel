const contact = require('../model/contact-model')

// user contact logic

const contactForm = async (req ,res) =>{
 try {
    const contactDetails = req.body;
    await contact.create(contactDetails);
    res.status(200).send({message : " message send successfully"})    
} catch (error) {
     res.status(400).send({message : " message not delivered"})
 }
}

module.exports = contactForm;