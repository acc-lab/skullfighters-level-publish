var _=undefined
class ButtonLow{
    constructor(init,//add variable in this function (if dont have to use leave it blank) [void]
                draw_func,//decide how it draw [void]
                button_func,//function that will run after clicked [void]
                hoverdetect//hover detection [bool]
                ){
        this.init=init
        this.draw_func=draw_func
        this.hoverdetect_func=hoverdetect
        this.button_func=button_func
        this.hovering=false
        this.clicking=false
        this.lastclicking=false
        this.init()//create variable in this function
    }
    frameAction(){
        this.hovering=false
        if(this.hoverdetect_func()){
            this.hovering=true
            if(new_cursor_click){
                this.clicking=true
            }
            if(new_cursor_unclick){
                this.clicking=false
            }
        }
        
        //this class provided you 3 variable to let you to use
        this.button_func()
        this.drawSelf()


        this.lastclicking=this.clicking
    }
    drawSelf(){
        this.draw_func()
    }
}
class ButtonHigh extends ButtonLow{//a.k.a Acc_noob version
    constructor(x,
                y,
                image,//image that will be the button
                button_func,//a function which will run after clicking
                scaleupfactor=.2,//scale up after hover
                image2=undefined,//image after mousedown (if undefined then it will be image)(defalut mouseup run the function)(USE THE PICTURE THAT HAVE SAME SIZE WITH IMAGE)
        ){
        super(
            function(){
                this.timeafterhover=0;console.log(11)
            }
            ,
            function(){
                console.log(1.5+scaleupfactor/(1+5**(this.timeafterhover)))
                if((!(this.hovering&&this.clicking))){
                    coDrawImage(image,-1,x,y,_,_,_,1.5-scaleupfactor/(1+5**(-this.timeafterhover)))
                }
                if(this.hovering&&this.clicking){
                    coDrawImage(image2!=undefined?image2:image,-1,x,y,_,_,_,1.5-scaleupfactor/(1+5**(-this.timeafterhover)))
                }
            }
            ,
            function(){
                if(!this.lastclicking&&this.clicking){
                    this.timeafterhover-=5
                }
                if(this.hovering){
                    this.timeafterhover=Math.min(this.timeafterhover+1,2)
                }else{
                    this.timeafterhover=Math.max(this.timeafterhover-1,-2)
                }
                if(this.hovering&&this.lastclicking&&!this.clicking){
                    button_func()
                }}
            ,
            function(){
                return((cursor_x>=x+shift[image][0])&&(cursor_x<=x+shift[image][0]+store[image].width/1.5)&&(cursor_y>=y+shift[image][1])&&(cursor_y<=y+shift[image][1]+store[image].height/1.5))
            }
        )
        console.log(1010)
    }
}