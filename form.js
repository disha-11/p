class Form{
    constructor(){
       this. input1=createInput("child");
       this. input2=createInput("mom");
       this.next=createButton("Next");
       this.next2=createButton("Next");
       this.choose=createButton("choose");
       this. textBox=createInput("type something");
       this.mics=createButton("mic");
       this.bye=createButton("bye");
       this.sel = createSelect();

    }
    hide1(){
        this.next2.hide();
        this.choose.hide();
        this. textBox.hide();
        this.mics.hide();
        this.bye.hide();
        this.sel.hide();
        this. input1.position(200,200); 
        player.name = this.input1.value();
       this. input2.position(displayWidth/2-90,displayHeight/2-80); 
         player.mom = this.input2.value();
         this. next.position(displayWidth/2-40,displayHeight/2-80);
         player.updateName(player.name);
         player.updateMom(player.mom);
        this.next.mousePressed(()=>{
            console.log(player.name)
            gameState=1;
         })
    }
    hide2(){
        //this.next2.hide();
        this.next.hide();
        this.input1.hide();
        this.input2.hide();
        this.choose.hide();
        this. textBox.hide();
        this.mics.hide();
        this.bye.hide();
        this.sel=createSelect();
        this.sel.size(200)
        this. sel.position(10, 10);
        this.sel.option('happy feelings');
        this.sel.option("what's special today");
        this.sel.option('random Q&A');
        this.sel.option('sad feelings');
        this.sel.option('angry feelings');
        this.sel.option('share an idea');
        this.sel.option('complain');
        this.sel.option('need motivation');
        this.sel.option('proud movement');
        this.sel.option('scary feelings');
        this.sel.option('nervous feelings');
        this.sel.option('need sympathy');
        this.sel.changed(()=>{
            emo= this.sel.value();
            if(emo==="happy feelings"){

            }
            if(emo==="what's special today"){
                
            }
            if(emo==="random Q&A"){
                
            }
            if(emo==="sad feelings"){
                
            }
            if(emo==="angry feelings"){
                
            }
            if(emo==="share an idea"){
                
            }
            if(emo==="complain"){
                
            }
            if(emo==="need motivation"){
                
            }
            if(emo==="proud movement"){
                
            }
            if(emo==="scary feelings"){
                
            }
            if(emo==="nervous feelings"){
                
            }
            if(emo==="need sympathy"){
                
            }
            
        });
            this.next2.mousePressed(()=>{
gameState=2;
             })
          
    }
    hide3(){
        this.next2.hide();
        this.next.hide();
        this.input1.hide();
        this.input2.hide();
       // this.choose.hide();
        //this. textBox.hide();
        //this.mics.hide();
       // this.bye.hide();
        this.sel.hide();
    }
   
}