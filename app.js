
$(()=>{
    const levelOne = [100
        ,101
        ,102
        ,103
        ,104
        ,105
        ,106
        ,107
        ,108
        ,109
        ,110
        ,111
        ,112
        ,113
        ,114
        ,115
        ,116
        ,117
        ,118
        ,119
        ,120
        ,121
        ,122
        ,123
        ,124
        ,125
        ,126
        ,127
        ,128
        ,129
        ,130
        ,131
        ,132
        ,232
        ,233
        ,234
        ,233
        ,133
        ,132
        ,133
        ,132
        ,133
        ,134
        ,234
        ,235
        ,236
        ,235
        ,135
        ,134
        ,135
        ,136
        ,236
        ,237
        ,238
        ,239
        ,240
        ,241
        ,242
        ,243
        ,244
        ,245
        ,246
        ,247
        ,248
        ,247
        ,248
        ,348
        ,349
        ,449
        ,549
        ,550
        ,549
        ,649
        ,650
        ,651
        ,652
        ,552
        ,551
        ,450
        ,350
        ,349
        ,348
        ,448
        ,548
        ,648
        ,649
        ,549
        ,449
        ,450
        ,449
        ,349
        ,249
        ,250
        ,350
        ,351
        ,251
        ,250
        ,251
        ,350
        ,450
        ,451
        ,551
        ,552
        ,452
        ,451
        ,452
        ,451
        ,351
        ,352
        ,351
        ,251
        ,252
        ,251
        ,350
        ,349
        ,449
        ,450
        ,550
        ,650
        ,651
        ,652
        ,653
        ,654
        ,655
        ,656
        ,657
        ,658
        ,659
        ,660
        ,661
        ,662
        ,663
        ,664
        ,665
        ,666
        ,667
        ,668
        ,669
        ,670
        ,671
        ,672
        ,673
        ,674
        ,675
        ,676
        ,677
        ,678
        ,679
        ,680
        ,681
        ,682
        ,683
        ,684
        ,685
        ,686
        ,687
        ,688
        ,689
        ,690
        ,691
        ,692
        ,693
        ,694
        ,695
        ,696
        ,697
        ,698
        ,699]; 



    const changeColor = (event) => {
         $(event.currentTarget).addClass('hover');
        let n= $(event.currentTarget).attr('id');
         ///This Arr is  for make Levels
        console.log(n)

        if($(event.currentTarget).hasClass('square') === true){
            GameOver()
        }    
    }
    ///Make the Maze
    const makeMaze=()=>{
        for (let i = 0; i < 1000; i++) {
            const $div = $('<div>').addClass('square').attr('id',`${i}`);
            $div.on('mouseover', changeColor);
            $('#container').append($div);
            
        }

    }
    const makeNextMaze=(lvlN)=>{
        const $gameBoard = $('#gameBoard')
        $gameBoard.html('');
        const $nextContainer=$('<div>').attr('id',`container${lvlN}`);
        $gameBoard.append($nextContainer);
        for (let i = 0; i < 1000; i++) {
            const $div = $('<div>').addClass('square').attr('id',`${i}`);
            $div.on('mouseover', changeColor);
            $nextContainer.append($div);
            
        }
        
    }
    const  GameOver=()=>{
        console.log('Game over');
       // alert('Please star over')
        
    }
    
    //Make the way 
    const makeWay=(level)=>{
        for (let i = 0; i < level.length; i++) {
            $(`#${level[i]}`).removeClass('square').addClass('squareWay');
            $(`#${level[i]}`).addClass('way');   
        }
        starAndEnd(level)
    }
    //////set the star and end
    const starAndEnd=(arr)=>{
      
        let last = arr[arr.length-1];
       
        // console.log(arrEnd);
        $(`#${arr}`).removeClass('hover').addClass('hoverStar').on('mouseover',StarMaze);
        

        $(`#${last}`).removeClass('hover').addClass('hoverEnd');
        $(`#${last}`).on('mouseover',EndMaze);

    }
    const StarMaze =()=>{
       console.log('Maze started')
       $(`#1`).addClass('lvnex');
    }
    const EndMaze =()=>{
         console.log('Maze Ended')
        if($(`#1`).hasClass('lvnex')){
            makeNextMaze(2);
        }
        

    }
    makeMaze();
    makeWay(levelOne);
    


})