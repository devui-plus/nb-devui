export const ColorInputModel = {
    color: '#1daf68',
    setColor: function(event) {
        ColorInputModel.color = event.target.value;
    },
    confirm: function() {
        console.log('confirm color:', ColorInputModel.color);
    }
};
