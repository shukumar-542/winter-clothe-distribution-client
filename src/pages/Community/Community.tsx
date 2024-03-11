/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import Container from "../../components/ui/Container";
import { useGetGratitudeQuery, usePostGratitudeMutation } from "../../redux/features/CommentSlice/commentApi";
import { toast } from "sonner";
import { useState } from "react";
import CommentModal from "../../components/ui/CommentModal";
type FData = {
    post: string
}
const Community = () => {
    const [postGratitude] = usePostGratitudeMutation();
    const [showModal , setShowModal] = useState(false);
    const [commentId, setCommentId] = useState("")
    const { data, isLoading } = useGetGratitudeQuery('')
    const { register, handleSubmit, reset,formState: { errors }  } = useForm<FData>()
    const onSubmit = async (data: FData) => {
        const toastId = toast.loading('Product added')
        
        try {

            postGratitude(data)
            toast.success('Product added successfully', { id: toastId, duration: 2000 })
            reset()
        } catch (error) {
            toast.error('Something Went Wrong.', { id: toastId, duration: 2000 })

        }
    }


    const handleComment = (id : string) => {
        setShowModal(true);
        setCommentId(id)

    }

    const handleCloseModal = ()=>{
        setShowModal(false);
        setCommentId('')
    }

    if (isLoading) {
        return <p>Loading.</p>
    }
    return (
        <Container >
            {
                showModal && (
                    <CommentModal onClose={handleCloseModal} postId={commentId} />
                )
            }
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-2 mt-5 w-full">
                        <textarea {...register("post",{ required: true })} className="border rounded-md p-2" placeholder="Type your gratitude post" name="post" id="" />
                        {errors.post && <span style={{ color: 'red' }}>Please write your post</span>}
                    </div>
                    <button type="submit" className="bg-gray-600 px-5 py-2 mt-2 rounded-md shadow-md text-white  ">Post</button>
                </form>
            </div>

            <div className="max-w-4xl mx-auto my-5  ">
              
                {
                    data?.map((post: any) => (
                        <div key={post?._id} className="bg-gray-100 p-5 rounded-md shadow-md leading-relaxed mb-5">
                            <p>{post?.post}</p>
                            <button onClick={() => handleComment(post?._id)} className="bg-gray-600 px-5 py-2 mt-5 rounded-md shadow-md text-white ">Post Comment</button>
                            <p className="mt-5 ">All Comments: </p>
                            {
                                post?.comments?.map((comment : any) =>(
                                    <p className="bg-gray-200 mx-auto  pl-5 my-4 py-2 rounded-md shadow-sm max-w-xl">{comment.comment}</p>
                                ))
                            }
                            

                        </div>
                    ))
                }
                
            </div>
        </Container>
    );
};

export default Community;