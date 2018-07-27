let app = new Vue({
   
    el: "#app",
    
    data: {
        
        plantType:          null,
        
        gallons:            null,
        
        masterBlend:        null,
        
        calciumNitrate:     null,
        
        magnesiumSulfate:   null,
        
        ammoniumSulfate:    null,
        
        hardWater:          null,
        
        flowering:          null,
          
    },   /*  END DATA SECTION  */
    
    
    
    methods: {
        
        mixSelector: function(){
            
      
        // ------------  MIXTURES FOR LFGR (LEAFY GREENS) ------------ //
            
            if ( this.plantType == "LFGR" &&
                 this.hardWater == false )
                {
                    this.mixture_5();
                }
            
            if ( this.plantType == "LFGR" &&
                 this.hardWater == true )
                {
                    this.mixture_6();
                }
          
            // ------------  MIXTURES FOR NUHG (NUTRIENT HOGS) ------------ //
            
            if (this.plantType == "NUHG" &&  //SOFT WATER
                this.hardWater == false )
                {
                    this.mixture_1();
                }
            
            
            if (this.plantType == "NUHG" &&  // HARD WATER
                this.hardWater == true )
                {
                    this.mixture_2();
                }
            
            // ------------  MIXTURES FOR PEPR (PEPPERS) ------------ //
            
            /*
            
            if ( this.plantType == "PEPR" &&  // SOFT WATER
                 this.hardWater == false &&  // VEGETATION
                 this.flowering == false )
                    {
                        this.mixture_1();
                    }
                    
            */
            
            
            /*
            
            if ( this.plantType == "PEPR" &&        // HARD WATER
                 this.hardWater == true &&          // VEGETATION
                 this.flowering == false )          // RADIO BUTTON
                    {
                        this.mixture_2();
                    }
            */
            
            
            /*
            
            if (  this.plantType == "PEPR" &&       // SOFT WATER
                    this.hardWater == false &&      // FLOWERING 
                    this.flowering == true )        // RADIO BUTTON
                    {
                        this.mixture_3();
                    }
            
            */
            
            
            /*
            
            if (    this.plantType == "PEPR" &&     // HARD WATER
                    this.hardWater == true &&       // FLOWERING 
                    this.flowering == true )        // RADIO BUTTON
                    {
                        this.mixture_4();
                    }
            */
            
            
            if ( this.plantType == "PEPRFL" &&      // SOFT WATER
                 this.hardWater == false)           // FLOWERING 
                    {                               // DROPDOWN
                        this.mixture_3();
                    }
            
            
            if ( this.plantType == "PEPRFL" &&      // HARD WATER
                 this.hardWater == true)            // FLOWERING                           
                    {                               // DROPDOWN
                        this.mixture_4();
                    }
            
            
            if ( this.plantType == "PEPRVG" &&      // SOFT WATER
                 this.hardWater == false)           // VEGETATION
                    {                               // DROPDOWN
                        this.mixture_1();
                    }
            
            
            if ( this.plantType == "PEPRVG" &&      // HARD WATER
                 this.hardWater == true)            // VEGETATION
                    {                               // DROPDOWN
                        this.mixture_2();
                    }
                   
            
        },   /*  END CALCULATOR FUNCTION  */
        
        
        
         // ------------  FUNCTIONS FOR INDIVIDUAL MIXTURES  ------------ //
        
        
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


//$(".ui.dropdown").dropdown();







