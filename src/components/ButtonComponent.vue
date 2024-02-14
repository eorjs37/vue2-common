<template>
    <div>
        <button @click="btnClick" class="btn" :class="type" :disabled="disabled">{{ btnname }}</button>
    </div>
</template>
<script>
export default {
    name: 'ButtonComponent',
    emits: ['on-custom-click'],
    props: {
        btnname: {
            type: String,
            default: '버튼',
            required: false
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false
        },
        type: {
            type: String,
            default: '',
            required: false
        }
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        btnClick() {
            this.$emit('on-custom-click')
        }
    },
};
</script>
<style scoped>
.btn {
    background-color: var(--blue);
    border: none;
    cursor: pointer;
    color: var(--white);
    padding: 10px;
    line-height: 1;
    font-size: 14px;
    border-radius: 15px;
}

.btn:hover {
    opacity: .8;
}

.btn:disabled {
    opacity: .5;
    cursor: initial;
}

.btn.danger {
    background-color: var(--danger);
}

.btn.warning {
    background-color: var(--warning);
}
</style>
