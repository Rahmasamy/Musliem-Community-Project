import Stepper from "react-stepper-horizontal";
import AuthButton from "@/components/common/AuthButton";
import CommonInput from "@/components/common/CommonInput";
import LogoComponent from "@/components/common/logo-component/LogoComponent";
import { Link, useNavigate } from "react-router-dom";
// import { SlCloudUpload } from "react-icons/sl";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoreInfo.css";
import GoBack from "@/components/common/GoBack/GoBack";
import { useRegisterStore } from "@/store/registerStore";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { useField } from "@/hooks/useField";
export default function MoreInfoFeature() {
  const navigate = useNavigate();
  const registerState = useRegisterStore();
  const { state } = useLocation();
  const [currentStep] = useState(state?.step || 0);
  const { updateField } = useRegisterStore();
  const { register } = useAuth();
  const skillField = useField("");
  const otherSkillField = useField("");
  const bioField = useField("");
  const roleField = useField("");
  const [termsTouched, setTermsTouched] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const SKILL_CATEGORIES = [
    "Technology & Digital",
    "Business & Management",
    "Creative & Media",
    "Education & Training",
    "Agriculture & Environment",
    "Social & Community",
    "Other",
  ];

  const handleCreate = async () => {
    const formData = new FormData();

    // append all values
    formData.append("fullName", registerState.fullName);
    formData.append("email", registerState.email);
    formData.append("password", registerState.password);
    formData.append("confirmPassword", registerState.confirmPassword);
    formData.append("phoneNumber", registerState.phoneNumber || "");
    // if (registerState.businessPhoto)
    //   formData.append("businessPhoto", registerState.businessPhoto);
    if (registerState.photo) formData.append("photo", registerState.photo);
    formData.append("skill", registerState.skill || "");
    formData.append("otherSkill", registerState.otherSkill || "");
    formData.append("bio", registerState.bio || "");
    formData.append("role", registerState.role || "");

    try {
      if (termsChecked) {
        if (registerState.password === registerState.confirmPassword) {
          await register(formData as any);
          toast.success("Account created successfully");
          await new Promise((r) => setTimeout(r, 800)); // 👈 delay 800ms

          useRegisterStore.getState().reset();
          navigate("/login");
        } else {
          toast.error("please check your password and confirm password");
        }
      } else {
        toast.error("please check the terms and conditions");
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <GoBack />
      <div className="LoginForm flex flex-col justify-center items-start gap-4">
        <div className="img-desc flex flex-col w-full items-center gap-3 ">
          <LogoComponent
            desc={
              <>
                We’re excited to have in our community.
                <br />
                Let’s get Started!
              </>
            }
          />
          <div className="p-4">
            <Stepper
              steps={[{ title: "Personal Info" }, { title: "More Info" }]}
              activeStep={currentStep}
              defaultColor="#89cdd3"
              completeColor="#1c7a80"
              activeColor="#1c7a80"
              defaultBarColor="#89cdd3"
              completeBarColor="#1c7a80"
              defaultTitleColor="#000"
              completeTitleColor="#000"
              activeTitleColor="#000"
              size={28}
              circleFontSize={14}
              titleFontSize={14}
              className="stepper-custom"
            />
          </div>
          <div className="inputFields w-full flex flex-col gap-5 items-start">
            <div className="input-radio-group w-full">
              <p className="font-bold mb-2">Choose your Skill:</p>
              <div className="radioinputfield flex gap-6 flex-wrap">
                {SKILL_CATEGORIES.map((skill) => (
                  <div className="single-input">
                    <label
                      key={skill}
                      className="flex items-center gap-2 cursor-pointer p-3"
                    >
                      <input
                        type="radio"
                        name="skills"
                        value={skill}
                        className="accent-teal-700 w-4 h-4"
                        id={skill}
                        onChange={(e) => {
                          skillField.onChange(e);
                          updateField("skill", e.target.value);
                        }}
                        onBlur={skillField.onBlur}
                        checked={skillField.value === skill}
                      />
                      {skillField.touched && !skillField.value && (
                        <p className="text-red-500 text-xs mt-1">
                          Skill is required
                        </p>
                      )}
                      <span className="text-gray-700 capitalize">
                        {skill.replace("-", " ")}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <CommonInput
              type="text"
              name="other skill"
              placeholder="Other skill"
              label="Other Skill"
              required={false}
              value={otherSkillField.value}
              onChange={(e) => {
                otherSkillField.onChange(e);
                updateField("otherSkill", e.target.value);
              }}
              onBlur={otherSkillField.onBlur}
              touched={otherSkillField.touched}
              error={""}
            />

            <div className="Bio w-full">
              <label htmlFor="bio" className="block text-sm font-medium mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                placeholder="Tell us more about yourself..."
                rows={4}
                value={bioField.value}
                onChange={(e) => {
                  bioField.onChange(e);
                  updateField("bio", e.target.value);
                }}
                onBlur={bioField.onBlur}
                className={`w-full p-3 rounded-md ${
                  bioField.touched && !bioField.value ? "border-red-500" : ""
                }`}
              ></textarea>
              {bioField.touched && !bioField.value && (
                <p className="text-red-500 text-xs mt-1">Bio is required</p>
              )}
            </div>

            <div className="input-radio-group w-full mt-4">
              <p className="font-bold mb-2 text-gray-700">Your Role:</p>
              <div className="radioinputfield  flex gap-6 flex-wrap">
                {[
                  "individual",
                  "non-profit-organization",
                  "business-owner",
                ].map((role) => (
                  <div className="single-input">
                    <label
                      key={role}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        id={role}
                        name="role"
                        value={role}
                        className="accent-teal-700 w-4 h-4"
                        checked={roleField.value === role}
                        onChange={(e) => {
                          roleField.onChange(e);
                          updateField("role", e.target.value);
                        }}
                        onBlur={roleField.onBlur}
                      />
                      <span className="text-gray-700 mb-2">{role}</span>
                    </label>
                  </div>
                ))}
                {roleField.touched && !roleField.value && (
                  <p className="text-red-500 text-xs mt-1">Role is required</p>
                )}
              </div>
            </div>

            {/* <div className="common-input-wrapper">
              <CommonInput
                type="file"
                name="file"
                placeholder="Upload Photo for your Bussiness(5Mmb Max)"
                label="Upload your photo (5Mmb Max)"
                required={false}
                icon={<SlCloudUpload fill="#1c7a80" fontSize={17} />}
                accepts="image/*"
                onChange={(e: any) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    updateField("businessPhoto", file);
                  }
                }}
              />
            </div> */}
            <div className="checkBox w-full flex items-start gap-2 mt-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value="terms"
                className="mt-1 accent-teal-700"
                checked={termsChecked}
                onChange={(e) => {
                  setTermsChecked(e.target.checked);
                  updateField("terms", e.target.checked ? "true" : "false");
                }}
                onBlur={() => setTermsTouched(true)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-teal-700 underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
            {termsTouched && !termsChecked && (
              <p className="text-red-500 text-xs">You must agree to continue</p>
            )}

            <div className="AuthBtnContainer w-full flex justify-center items-center ">
              <AuthButton
                label="Create Account"
                variant="primary"
                type="submit"
                onClick={handleCreate}
              />
            </div>
            <div className="Register">
              <p>
                Already have account?
                <span className="CreatAcountSpan">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
