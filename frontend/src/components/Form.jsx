import styles from '../styles/Username.module.css';
import Avatar from './Avatar';
import Button from './Button';
import CheckBox from './CheckBox';
import FormFooter from './FormFooter';
import Input from './Input';
import ProfileImageUpload from './ProfileImageUpload';

const Form = ({
	children,
	onSubmit,
	fields = [],
	isLoading,
	btnLoadingText,
	btnText,
	avatar,
	avatarImg,
	formik,
	footerText,
	footerLinkText,
	footerRoute,
	footerBtnText,
	onClick,
	checkBox = false,
	userImg,
	flexContainer = false,
	recovery = false,
}) => {
	const inputFields = fields.flatMap(field =>
		field.map(({ type, name, placeholder }) => (
			<Input
				key={name}
				type={type}
				name={name}
				placeholder={placeholder}
				formik={formik}
			/>
		))
	);

	const renderFields = () => (
		<>
			{fields[1] ? (
				<>
					<div className='flex w-3/4 gap-6'>
						{inputFields?.slice(fields[1]?.length + 1)}
					</div>

					{inputFields?.slice(0, fields[1]?.length + 1)}
				</>
			) : (
				inputFields?.slice(fields[1]?.length)
			)}
		</>
	);

	const renderAvatar = () =>
		avatar ? (
			<Avatar img={avatarImg} />
		) : (
			<ProfileImageUpload userImg={userImg} />
		);

	return (
		<form className='py-1' onSubmit={onSubmit}>
			{recovery ? (
				children
			) : (
				<>
					{renderAvatar()}

					<div
						className={
							!flexContainer
								? 'flex flex-col items-center gap-6'
								: styles.flex_container
						}>
						{renderFields()}
						<Button
							isLoading={isLoading}
							loadingText={btnLoadingText}
							text={btnText}
						/>
						{checkBox && <CheckBox />}
					</div>

					<FormFooter
						text={footerText}
						linkText={footerLinkText}
						route={footerRoute}
						btnText={footerBtnText}
						onClick={onClick}
					/>
				</>
			)}
		</form>
	);
};

export default Form;
