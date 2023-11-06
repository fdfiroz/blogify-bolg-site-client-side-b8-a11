import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";


const AddBlog = () => {
  
  return (
    <div className=" my-6">
      <Card color="transparent" shadow={false} className="w-96 mx-auto">
    <Typography variant="h4" color="blue-gray">
      Add Blog
    </Typography>
    <Typography color="gray" className="mt-1 font-normal">
      Nice to meet you! Enter your blogs.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Blog Title
        </Typography>
        <Input
          size="lg"
          placeholder="Blog Title"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Image URL
        </Typography>
        <Input
          size="lg"
          placeholder="Image URL"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Category
        </Typography>
        <Select variant="outlined" label="Category">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Short Description 
        </Typography>
        <Input
          size="lg"
          placeholder="Short Description"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        Long Description 
        </Typography>
        <div className="w-96">
      <Textarea           
        size="lg"
        placeholder="Long Description"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
         />
          </div>
        
      </div>
      
      <Button className="mt-6" fullWidth>
        Add Blog
      </Button>
    </form>
  </Card>
    </div>
  )
}

export default AddBlog