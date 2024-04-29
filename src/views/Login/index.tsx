import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/user'
import { Input, Image, message, Form, Checkbox, Button, FormProps } from 'antd'
import UserAPI from '@/apis/user'
import { LeftComponent, LoginFormContainer, RightComponent } from './components'

type FieldType = {
    username?: string
    password?: string
    remember?: string
}

const Login: React.FC = () => {
    const { testVal } = useSelector((state: RootState) => ({
        testVal: state.user.testVal,
    }))
    const dispatch: AppDispatch = useDispatch()
    const [imgSrc, setImgSrc] = useState('')

    // initial code once
    useEffect(() => {
        console.log('testVal', testVal)
    }, [])

    // const getCode = async () => {
    //     try {
    //         const res = await UserAPI.getCode({})
    //         // setImgSrc(res)

    //         // console.log('res', res)
    //     } catch (error) {
    //         message.error('get code error')
    //     }
    // }

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values)
    }

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {}

    return (
        <>
            {/* <Input placeholder="please input code" />
            <img src={imgSrc} width={150} height={30} onClick={getCode} /> */}
            {/* <button onClick={()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
            <h1>{testVal}</h1> */}
            <LoginFormContainer>
                <LeftComponent>
                    
                </LeftComponent>
                <RightComponent>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item<FieldType>
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </RightComponent>
            </LoginFormContainer>
        </>
    )
}

export default Login
