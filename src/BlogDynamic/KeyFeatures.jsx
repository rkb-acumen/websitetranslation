import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./KeyFeatures.css";

function KeyFeatures({val}) {
  return (
    <>
    <div className="w-[100%] lg:px-[60px] md:px-[30px] px-[15px] lg:flex py-[40px] ">
      <div className="lg:w-[75%]  border-t-[1px] border-[#D7D7D7] border-b-[1px] lg:pr-[30px] pt-[30px] pb-[60px]  text-justify lg:text-start">
        {/* <div>
          <h2 className="font-35  text-start">
            The Google cloud platform offers managed instance <br></br> groups that
            provide efficient autoscaling capabilities.
          </h2>
          <p className="text-[16px] font-light mt-[30px] leading-6">
            These features allow you to automatically add or remove instances
            from a managed instance group based on increase or decrease in load.
            Autoscaling with GCP, helps your applications gracefully handle
            increase in traffic and helps reduce cost when the need for
            resources are lower
          </p>
          <p className="text-[16px] font-light mt-[30px] leading-6">
            This autoscaling is governed by defining an autoscaling policy. The
            autoscaler performs automatic scaling based on the measured load.
            There are many ways to configure autoscaling policies. For example:
            Scaling based on CPU utilization, load balancing capacity, or
            monitoring various system metrics, or by a queue-based workload
            Like <Link className="underline" href={"https://cloud.google.com/pubsub/"} >Cloud Pub/Sub</Link>. Let’s assume you have two instances that are
            currently running at 100 percent and 85 percent CPU utilization
          </p>
        </div>
        <div>
          <h6 className="font-normal font-30   mt-[30px]">Key Features</h6>
          <p className="text-[16px] font-light mt-[30px] leading-6">
            If you configure your target CPU utilization as 75 percent, the
            autoscaler will automatically add another instance to spread out the
            CPU load to ensure that the CPU utilization stays below the 75
            percent target. Similarly, if the overall load is much lower than
            the target, the autoscaler will remove instances as long as doing
            so, maintains the overall utilization below the target. Google cloud
            platform has a graphical user interface that provides all this
            information per instance. You can see the CPU utilization over the
            past hour. But you can’t change the timeframe and visualize other
            metrics like disk and network usage.
          </p>
        </div>
        <div>
          <h6 className="font-normal font-30  mt-[30px]" >Autoscaling capabilities.</h6>
          <p className="text-[16px] font-light mt-[30px] leading-6">
            This graphical user interface is very useful for monitoring your
            instances, utilization, and for determining how best to configure
            your autoscaling policy to meet changing demands. Using  <Link className="underline " href={"https://cloud.google.com/compute/docs/autoscaler/scaling-cloud-monitoring-metrics"} >Stackdriver monitoring</Link>, you can set up alerts through several notification
            channel
          </p>
          <p className="text-[16px] font-light mt-[30px] leading-6">
            An important configuration for a managed instance group and load
            balancer is a health check. A health check is very similar to an
            Uptime check in Stackdriver.With this, you define a protocol, port,
            and health criteria & based on this configuration, GCP computes a
            health state for each instance.
          </p>
          <p className="text-[16px] font-light mt-[30px] leading-6">
            The health criteria defines how often to check whether an instance
            is healthy. It also includes checks and criteria, <br /> Here are a few
            example:
          </p>
          <ul className="list-disc px-[25px] font-light">
            <li>How long to wait for a response?</li>
            <li>How many successful attempts are decisive?</li>
            <li>How many failed attempts are decisive?</li>
          </ul>
          <p className="text-[16px] font-light mt-[30px] leading-6">
            The Health check can even define how many times it has to fail over
            what total time period before an instance is considered unhealthy.
          </p>
        </div> */}
        <div className="blog" dangerouslySetInnerHTML={{__html : val?.content?.rendered}}></div>
      </div>
      <div className="lg:w-[25%]  border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] lg:border-r-[0px] border-[#D7D7D7]">
        <div className="">
          <div className="flex items-center border-b-[1px] border-[#D7D7D7] p-[20px]">
            <Image
              src={"/Blog/KeyFeatures/twitter.svg"}
              width={200}
              height={200}
              className="w-[40px] h-[40px]  mr-[15px]"
            />
            <p className="text-[18px]">Twitter</p>
          </div>
          <div className="flex items-center  border-b-[1px] border-[#D7D7D7] p-[20px]">
            <Image
              src={"/Blog/KeyFeatures/linkedin.svg"}
              width={200}
              height={200}
              className="w-[40px] h-[40px]  mr-[15px]"
            />
            <p className="text-[18px]">LinkedIn</p>
          </div>
          <div className="flex items-center  border-b-[1px] border-[#D7D7D7] p-[20px]">
            <Image
              src={"/Blog/KeyFeatures/facebook.svg"}
              width={200}
              height={200}
              className="w-[40px] h-[40px] mr-[15px]"
            />
            <p className="text-[18px]">Facebook</p>
          </div>
        </div>
        <div className="lg:mt-[30px] lg:ml-[20px] py-5 px-3 lg:py-0 lg:px-0 ">
          <div className="border-[#14141C] border w-[100%] h-auto p-[15px] bg-[#14141C] rounded-[15px]">
            <Image
              src={"/Blog/KeyFeatures/KeyFeatures-banner.png"}
              width={400}
              height={400}
              className="w-full h-full"
            />
            {/*<p className="text-white text-[16px] mt-[5px] font-light leading-5">Have questions about The Google cloud platform offers managed </p>*/}
          </div>
        </div>
        <div className="w-full  ">
          <div className='py-[30px] lg:pl-[20px] lg:px-0  px-[15px]'>
            <Link href={"/contact"}>
              <button className='ss1-btn'>
                Let's Talk!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* <div dangerouslySetInnerHTML={{__html : val?.content?.rendered}}></div> */}
    </>
  );
}

export default KeyFeatures;
