demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListeners();
        console.log('state9');
    },
    update: function(){}
};