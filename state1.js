demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#123abc';

        addChangeStateEventListeners();
        console.log('state1');
    },
    update: function(){}
};
