let app = new Vue({
   
    el: "#app",
    
    data: {
        
        seedType: null,
        
        number: 0
        
        
        
        
        
    },   /*  END DATA SECTION  */
    
    
    methods: {
        
        calculator: function(){
            
            if (this.seedType == "PEPR")
                {
                    this.number = 5000 + " This is now a turtle."
                }
            
            
            
            
        }
        
    }
        
});


