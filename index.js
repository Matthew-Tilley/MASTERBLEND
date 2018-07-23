let app = new Vue({
   
    el: "#app",
    
    data: {
        
        seedType:           null,
        
        gallons:            10,
        
        masterBlend:        null,
        
        calciumNitrate:     null,
        
        magnesiumSulfate:   null,
        
        ammoniumSulfate:    null,
        
        hardWater:          true,
        
        flowering:          false,
        
        
        
        
        
    },   /*  END DATA SECTION  */
    
    
    
    
    methods: {
        
        mixSelector: function(){
            
      
        // ------------  MIXTURES FOR LFGR (LEAFY GREENS) ------------ //
            
            if ( this.seedType == "LFGR" &&
                 this.hardWater == false )
                {
                    this.mixture_5();
                }
            
            if ( this.seedType == "LFGR" &&
                 this.hardWater == true )
                {
                    this.mixture_6();
                }
          
            // ------------  MIXTURES FOR NUHG (NUTRIENT HOGS) ------------ //
            
            if (this.seedType == "NUHG" &&  //SOFT WATER
                this.hardWater == false )
                {
                    this.mixture_1();
                }
            
            
            if (this.seedType == "NUHG" &&  // HARD WATER
                this.hardWater == true )
                {
                    this.mixture_2();
                }
            
            // ------------  MIXTURES FOR PEPR (PEPPERS) ------------ //
            
            if ( this.seedType == "PEPR" &&  // SOFT WATER
                 this.hardWater == false &&  // VEGETATION
                 this.flowering == false )
                    {
                        this.mixture_1();
                    }
            
            
            if ( this.seedType == "PEPR" && // HARD WATER
                 this.hardwater == true &&  // VEGETATION
                 this.flowering == false )
                    {
                        this.mixture_2();
                    }
            
            
            if ( this.seedType == "PEPR" &&  // SOFT WATER
                 this.hardwater == false &&  // FLOWERING 
                 this.flowering == true )
                    {
                        this.mixture_3();
                    }
            
            
            if ( this.seedType == "PEPR" &&  // HARD WATER
                 this.hardwater == true &&  // FLOWERING 
                 this.flowering == true )
                    {
                        this.mixture_4();
                    }
            
        },   /*  END CALCULATOR FUNCTION  */
        
        
        
        mixture_1: function() {
            
            this.masterBlend =      this.gallons * 2.4;
            this.calciumNitrate =   this.gallons * 2.4;
            this.magnesiumSulfate = this.gallons * 1.2;
            this.ammoniumSulfate =  this.gallons * 0.0;
            
        },  /*  END MIXTURE #1 FUNCTION  */
        
            
        mixture_2: function() {
            
            this.masterBlend =      this.gallons * 2.4; 
            this.calciumNitrate =   this.gallons * 1.2;   
            this.ammoniumSulfate =  this.gallons * 0.9;
            this.magnesiumSulfate = this.gallons * 1.2; 
                              
            
        },  /*  END MIXTURE #2 FUNCTION  */
        
        
        mixture_3: function() {
            
            this.masterBlend =      this.gallons * 2.4; 
            this.calciumNitrate =   this.gallons * 0.8;   
            this.ammoniumSulfate =  this.gallons * 0.0;
            this.magnesiumSulfate = this.gallons * 1.2; 
                              
            
        },  /*  END MIXTURE #3 FUNCTION  */
        
        
        mixture_4: function() {
            
            this.masterBlend =      this.gallons * 2.4; 
            this.calciumNitrate =   this.gallons * 0.4;   
            this.ammoniumSulfate =  this.gallons * 0.3;
            this.magnesiumSulfate = this.gallons * 1.2; 
                              
            
        },  /*  END MIXTURE #4 FUNCTION  */
        
        
        
         mixture_5: function() {
            
            this.masterBlend =      this.gallons * 2.0; 
            this.calciumNitrate =   this.gallons * 2.0;   
            this.ammoniumSulfate =  this.gallons * 0.0;
            this.magnesiumSulfate = this.gallons * 1.0; 
                              
            
        },  /*  END MIXTURE #5 FUNCTION  */
        
        
         mixture_6: function() {
            
            this.masterBlend =      this.gallons * 2.0; 
            this.calciumNitrate =   this.gallons * 1.0;   
            this.ammoniumSulfate =  this.gallons * 0.7;
            this.magnesiumSulfate = this.gallons * 1.0; 
                              
            
        },  /*  END MIXTURE #6 FUNCTION  */
        
        
        
    }   /*  END METHODS SECTION  */
        
});


