module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.Schema(
            {
            title:String,
            description:String,
            pulished:Boolean
        },
        {timestamps:true}
        )
    );
    return Tutorial
};