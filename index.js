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
                    this.masterBlend =      this.gallons * 2.4;
                    this.calciumNitrate =   this.gallons * 2.4;
                    this.magnesiumSulfate = this.gallons * 1.2;
                }
            
            
            if (this.seedType == "PEPR")
                {
                    this.masterBlend =      this.gallons * 2;
                    this.calciumNitrate =   this.gallons * 2;
                    this.magnesiumSulfate = this.gallons * 1;
                }
            
            
        },   /*  END CALCULATOR FUNCTION  */
        
        
        
        mixture_1: function() {
            
            this.masterBlend =      this.gallons * 20000;
            this.calciumNitrate =   this.gallons * 200000;
            this.magnesiumSulfate = this.gallons * 1;
            
        }
        
        
    }   /*  END METHODS SECTION  */
        
});


