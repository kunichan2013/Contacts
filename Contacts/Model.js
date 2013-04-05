
guidedModel =// @startlock
{
	Employee :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
			return this.lastName+','+this.firstName;
			}// @startlock
		},
		collectionMethods :
		{// @endlock
			myReport:function()
			{// @lock
			var res = this.compute("salary","company,fullName"); 
    		return res.toArray(); 				// Add your code here
			}// @startlock
		}
	}
};// @endlock
