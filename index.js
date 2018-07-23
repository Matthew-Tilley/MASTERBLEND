let app = new Vue({
   
    el: "#app",
    
    data: {
        
        seedType:           null,
        
        gallons:            10,
        
        masterBlend:        null,
        
        calciumNitrate:     null,
        
        magnesiumSulfate:   null,
        
        ammoniumSulfate:    null
        
        
        
        
        
    },   /*  END DATA SECTION  */
    
    
    methods: {
        
        mixSelector: function(){
            
            
            if (this.seedType == "LFGR")
                {
                    this.mixture_1();
                }
            
            
            if (this.seedType == "NUHG")
                {
                    this.mixture_2();
                }
            
            
            if (this.seedType == "PEPR")
                {
                    this.mixture_2();
                }
            
            
        },   /*  END CALCULATOR FUNCTION  */
        
        
        
        mixture_1: function() {
            
            this.masterBlend =      this.gallons * 2;
            this.calciumNitrate =   this.gallons * 2;
            this.magnesiumSulfate = this.gallons * 1;
            
        },  /*  END MIXTURE #1 FUNCTION  */
        
        
        mixture_2: function() {
            
            this.masterBlend =      this.gallons * 2.4;
            this.calciumNitrate =   this.gallons * 2.4;
            this.magnesiumSulfate = this.gallons * 1.2;
            
        },  /*  END MIXTURE #2 FUNCTION  */
        
        
        mixture_3: function() {
            
            this.masterBlend =      this.gallons * 999;
            this.calciumNitrate =   this.gallons * 999;
            this.magnesiumSulfate = this.gallons * 999;
            
        
        }, /*  END MIXTURE #3 FUNCTION  */
        
        
        
        
    }   /*  END METHODS SECTION  */
        
});


