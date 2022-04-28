/*
 Created by 潘光伟 on 2022/4/28.
*/
function isValueNumber(value) {
    return (/(^-?[]+[0-9]*$)|(^-?[0-9]+[.]?[0-9]*$)|(^-? 0{1}$)/).test(value);
}
Vue.comment('input-number',{
    template: `
        <div>
            <button:disabled="currentValue === min" @click="handleDown">-</button>
            <input type="text" value="currentValue" @change="handleChange">
            <button:disabled="currentValue === max" @click="handleUp">+</button>
        </div>
    `,
    data() {
        return {
            currentValue: this.value
        }
    },
    props: {
        max: {
            type: Number,
            default: Infinity
        }
    },
    min: {
            type: Number,
            default: -Infinity
        },
    value: {
        type: Number,
        default: 0
    },
    watch: {
        currentValue: function(val){
            this.$emit('input', val)
        },
        value: function(val){
            this.updataValue(val)
        }
    },
    methods: {
        updataValue(val) {
            let value = event.target.value;
            if (isValueNumber(value)) {
                this.value = value;
            }
        },
        handleDown() {
            let value = event.target.value;
            if (!isValueNumber(value)) {
                this.value = '';
            }
        },
        handleUp() {
            let value = event.target.value;
            if (!isValueNumber(value)) {
                this.value = '';
            }
        }
    }
});


