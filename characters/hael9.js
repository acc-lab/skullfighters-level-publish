function skeleton_haeler_walking_func_________(reload=400,
    shoot_func=function(l_l,l_r){
        let dist=Math.abs(this.x-(this.team==1?l_l:l_r))
        new_haelbomb(this.x+16*this.dir,this.y-22,this.team,150*this.dir,(22/Math.max(dist,15)-4*Math.max(dist,15)/900)*150,0,8/900*(150)**2,5,100,400)
    },
	walking_cycle_time = 4,
	walking_cycle_count = 3,
	full_walking_cycle_delay = 8,
	before_attack_delay = 4,
	detect_radius = 150,
	rapid_attack_radius = 500,
	attack_radius = 20
){
    //i forgor how to code js
    function inner_one_dont_fking_care_its_name_not_gonna_let_you_use(E,W,init){
        if(init=="INIT"){
            this.attack_radius=attack_radius;
            this.skipNeigborEnemies=true;
            return;
        }
        //this.tick property records the animation cycle frame
        this.tick++;

        //direction (sign 1000000000000 or sign -100000000000000)
        dir=this.dir

        //haeler-skull's costume movement
        if(this.tick<=4*walking_cycle_time*walking_cycle_count){
            if(this.tick%(4*walking_cycle_time)==1){
                if(this.tick==1){
                    this.cst="bow1";
                }else{
                    this.cst="bow1";
                    this.x+=2*dir;
                }
            }
    		if(this.tick%(4*walking_cycle_time)==1+walking_cycle_time){
				this.cst="bow2_walk";
				this.x+=2*dir;
			}
			if(this.tick%(4*walking_cycle_time)==1+walking_cycle_time*2){
				this.cst="bow3_walk";
				this.x+=4*dir;
			}
			if(this.tick%(4*walking_cycle_time)==(1+walking_cycle_time*3)%(4*walking_cycle_time)){
				this.cst="bow4_walk";
				this.x+=6*dir;
			}
            
        }
        if(this.tick==4*walking_cycle_time*walking_cycle_count+1){
            this.cst="bow1"
			this.x+=3*dir;
        }

        //if your fking teammate is still too far away,then skip the attack your teammate
        if(this.tick==4*walking_cycle_time*walking_cycle_count+1+full_walking_cycle_delay && ((this.x+detect_radius<=E&&this.team==1)||(this.x-detect_radius>=W&&this.team==2))){
           this.tick=1; 
        }

        //chicken attack!!!!
        if(this.tick==4*walking_cycle_time*walking_cycle_count+1+full_walking_cycle_delay+before_attack_delay){this.cst="bow1"}
        if(this.tick==4*walking_cycle_time*walking_cycle_count+1+full_walking_cycle_delay+before_attack_delay+2){this.cst="bow2"}
        if(this.tick==4*walking_cycle_time*walking_cycle_count+1+full_walking_cycle_delay+before_attack_delay+6){this.cst="bow3"}
        if(this.tick==4*walking_cycle_time*walking_cycle_count+1+full_walking_cycle_delay+before_attack_delay+10){this.cst="bow4"}
        if(this.tick==4*walking_cycle_time*walking_cycle_count+1+full_walking_cycle_delay+before_attack_delay+11){this.cst="bow1";/*custom shoot*/this.shoot_func=shoot_func;this.shoot_func(E,W)}
        if(this.tick==4*walking_cycle_time*walking_cycle_count+1+full_walking_cycle_delay+before_attack_delay+11+reload+4){
            if((this.team==1&&this.x+rapid_attack_radius>=E)||(this.team==2&&this.x-rapid_attack_radius<=W)){
                this.tick=4*walking_cycle_count*walking_cycle_time+1;
            }else{
                this.tick=1;
            }
        }
    }
    return inner_one_dont_fking_care_its_name_not_gonna_let_you_use;
}