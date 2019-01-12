const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StartupSchema = new Schema({

    startup_info: {

        startup_name: {
            type: String,
            required: true,
        },
        year_founded: {
            type: String,
            required: true,


        },

        googleSlides_link: {
            type: String,
            required: true,
        }


    },

    company_finance: {
        valuation: {
            type: String,
            required: true,
        },

        share_price: {
            type: String,
            required: true,
        },

        share_total: {
            // Total number of shares issued
            type: String,
            required: true,

        },

        selling_shares: {
            /* the number of shares the startup want's to sell to people on
            the secondary market.
            */

            type: String,
            required: true,


        }

    },

    founders: {

        founders_name: [{
            type: String,
            required: true,
        }],
        founders_linkedin_link: [{
            type: String,
            required: true,
        }],


    },

    signup: {

        email: {
            type: String,
            required: true,

        },

        password: {
            type: String,
            required: true,

        },

        registration_date: {
            type: Date,
            default: Date.now
        },

        bio: String,
        account_id: Schema.Types.ObjectId





    }


});